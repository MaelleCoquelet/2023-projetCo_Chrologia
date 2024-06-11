/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tm16r16d411evg9");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "tm16r16d411evg9",
    "created": "2024-06-09 19:25:00.802Z",
    "updated": "2024-06-09 19:25:00.802Z",
    "name": "utilisateur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s7bno8gj",
        "name": "pseudo",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
