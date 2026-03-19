Ext.define('MyApp.store.Personnels', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.Personnel',
    alias: 'store.personnels',
    autoLoad: true,
    autoSync: true
});