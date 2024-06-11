/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wj9d01my777p32i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "unwdwelo",
    "name": "statutLike",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djd15jvw",
    "name": "typePosts",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Reminder",
        "Weekly"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wj9d01my777p32i")

  // remove
  collection.schema.removeField("unwdwelo")

  // remove
  collection.schema.removeField("djd15jvw")

  return dao.saveCollection(collection)
})
