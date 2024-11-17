const { response } = require('express');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  //#Swagger.tags=['Contacts']
  const result = await mongodb.getDatabase().db().collection('Contacts').find();
  result.toArray().then((Contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(Contacts);
  });
};

const getSingle = async (req, res) => {
  //#Swagger.tags=['Contacts']
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('Contacts')
    .find({ _id: userId });
  result.toArray().then((Contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(Contacts[0]);
  });
};

const createContact = async (req, res) => {
  //#Swagger.tags=['Contacts']
  const contact = {
    contactName: req.body.contactName,
    email: req.body.email,
    name: req.body.name,
    ipaddress: req.body.ipaddress,
  };
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('Contacts')
    .insertOne(contact);
  if (result.acknowledged) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error ocurred while updating the contact');
  }
};

const updateContact = async (req, res) => {
  //#Swagger.tags=['Contacts']
  const contactId = new ObjectId(req.params.id);
  const contact = {
    contactName: req.body.contactName,
    email: req.body.email,
    name: req.body.name,
    ipaddress: req.body.ipaddress,
  };
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('Contacts')
    .replaceOne({ _id: contactId }, contact);
};

const deleteContact = async (req, res) => {
  //#Swagger.tags=['Contacts']
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('Contacts')
    .deleteOne({ _id: contactId });
  if (result.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error ocurred while updating the contact');
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
