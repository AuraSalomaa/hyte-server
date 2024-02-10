import {listAllEntries, findEntryById, addEntry,UpdateEntryById, DeleteEntryById } from "../models/entry-models.mjs";

const getEntries = async (req, res) => {
  const result = await listAllEntries();
  if (result.error) {
    return res.status(result.error).json(result);
  }
  return res.json(result);
};

const getEntryById = async (req, res) => {
  const entry = await findEntryById(req.params.id);
  if (entry) {
    res.json(entry);
  } else {
    res.sendStatus(404);
  }
};

const postEntry = async (req, res) => {
  const {entry_date, mood,weight,sleep_hours} = req.body;
  // check that all needed fields are included in request
  if (entry_date && mood && weight && sleep_hours) {
    const result = await addEntry(req.body);
    if (result.error) {
      return res.status(result.error).json(result);
    }
    return res.status(201).json(result);
  } else {
    return res.status(400).json({error: 400, message: 'bad request'});
  }
};

const putEntry = async(req, res) => {
    const entry_id = req.params.id;
    const {entry_date, mood, weight, sleep_hours, notes} = req.body;
    // check that all needed fields are included in request
    if (entry_id && entry_date && mood && weight && sleep_hours && notes) {
        const result = await UpdateEntryById({entry_id, ...req.body});
      if (result.error) {
        return res.status(result.error).json(result);
      }
      return res.status(201).json(result);
    } else {
      return res.status(400).json({error: 400, message: 'bad request'});
    }
  };


const deleteEntry = async(req, res) => {
  const result = await DeleteEntryById(req.params.id);
  if (result.error) {
    return res.status(result.error).json({message: "there was a proplem at deleted from the table"});
  }
  return res.json({message: "Entry has been deleted"});
};

export {getEntries, getEntryById, postEntry, putEntry, deleteEntry};
