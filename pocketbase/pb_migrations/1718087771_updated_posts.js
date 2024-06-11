/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wj9d01my777p32i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ddky3sdk",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wj9d01my777p32i")

  // remove
  collection.schema.removeField("ddky3sdk")

  return dao.saveCollection(collection)
})
