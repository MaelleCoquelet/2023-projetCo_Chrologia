/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wj9d01my777p32i")

  // remove
  collection.schema.removeField("fnpywy98")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k5yzxmvv",
    "name": "imagePost",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wywvkkmu",
    "name": "textePost",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iixelxxb",
    "name": "favoriNb",
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
    "id": "8s7bwvas",
    "name": "commentaireNb",
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
    "id": "n4nxhxrc",
    "name": "hiddenPost",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wj9d01my777p32i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnpywy98",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("k5yzxmvv")

  // remove
  collection.schema.removeField("wywvkkmu")

  // remove
  collection.schema.removeField("iixelxxb")

  // remove
  collection.schema.removeField("8s7bwvas")

  // remove
  collection.schema.removeField("n4nxhxrc")

  return dao.saveCollection(collection)
})
