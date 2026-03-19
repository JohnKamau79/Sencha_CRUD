Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    fields: ['name', 'email'],
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/api/personnel',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
});