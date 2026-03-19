Ext.define('MyApp.model.Personnel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email', 'phone'],
    proxy: {
        type: 'rest',
        url: 'http://127.0.0.1:8000/api/personnel',
        reader: { type: 'json', rootProperty: '' },
        writer: { type: 'json' },
        simpleSortMode: true
    }
});