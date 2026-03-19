Ext.define('MyApp.view.main.PersonnelFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'personnelformwindow',
    modal: true,
    title: 'New Personnel',
    width: 400,
    layout: 'fit',

    items: [
        {
            xtype: 'form',
            reference: 'popupForm',
            bodyPadding: 10,
            defaults: { anchor: '100%' },
            items: [
                { xtype: 'textfield', name: 'name', fieldLabel: 'Name', allowBlank: false },
                { xtype: 'textfield', name: 'email', fieldLabel: 'Email', vtype: 'email', allowBlank: false },
                { xtype: 'textfield', name: 'phone', fieldLabel: 'Phone', allowBlank: false }
            ],
            buttons: [
                { text: 'Save', handler: 'onSavePopupPersonnel' },
                { text: 'Cancel', handler: function(btn){ btn.up('window').close(); } }
            ]
        }
    ]
});