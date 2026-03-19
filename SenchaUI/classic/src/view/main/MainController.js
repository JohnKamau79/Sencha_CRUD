Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onCreatePersonnel: function() {
        Ext.create('MyApp.view.main.PersonnelFormWindow').show();
    },

    onSavePopupPersonnel: function(btn) {
        var form = btn.up('form').getForm();
        if (!form.isValid()) return;

        var values = form.getValues();
        var store = this.lookupReference('personnelGrid').getStore();

        var newRecord = store.add(values)[0];
        newRecord.save({
            success: function() {
                form.reset();
                btn.up('window').close();
            },
            failure: function(rec, operation) {
                Ext.Msg.alert('Error', 'Failed to save personnel.');
            }
        });
    },

    onDeletePersonnel: function(grid, rowIndex) {
        var store = grid.getStore();
        var rec = store.getAt(rowIndex);
        rec.erase({
            failure: function() {
                Ext.Msg.alert('Error', 'Failed to delete personnel.');
            }
        });
    }
});