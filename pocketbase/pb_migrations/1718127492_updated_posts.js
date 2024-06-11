/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wj9d01my777p32i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "abs0v2lr",
    "name": "datePost",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wj9d01my777p32i")

  // remove
  collection.schema.removeField("abs0v2lr")

  return dao.saveCollection(collection)
})
