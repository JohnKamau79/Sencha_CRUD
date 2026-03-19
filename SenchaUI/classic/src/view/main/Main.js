Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    controller: 'main',
    viewModel: { type: 'main' },
    layout: 'fit',

    items: [
        {
            xtype: 'grid',
            title: 'Personnel List',
            store: { type: 'personnels' },
            reference: 'personnelGrid',
            selModel: 'rowmodel',
            plugins: { ptype: 'cellediting', clicksToEdit: 1 },
            tbar: [
                { text: 'Create New Personnel', iconCls: 'x-fa fa-plus', handler: 'onCreatePersonnel' }
            ],
            columns: [
                { text: 'ID', dataIndex: 'id', width: 50 },
                { text: 'Name', dataIndex: 'name', flex: 1, editor: 'textfield' },
                { text: 'Email', dataIndex: 'email', flex: 1, editor: 'textfield' },
                { text: 'Phone', dataIndex: 'phone', flex: 1, editor: 'textfield' },
                {
                    text: 'Actions',
                    xtype: 'actioncolumn',
                    width: 80,
                    items: [
                        { iconCls: 'x-fa fa-trash', tooltip: 'Delete', handler: 'onDeletePersonnel' }
                    ]
                }
            ]
        }
    ]
});