/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21sa1n50cyemuxt")

  collection.name = "commentaires"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21sa1n50cyemuxt")

  collection.name = "commentaire"

  return dao.saveCollection(collection)
})
