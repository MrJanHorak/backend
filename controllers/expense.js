import { Expense } from "../models/expense.js"

const index = async (req, res) => {
  try{
    const expenses = await Expense.find({})
    return res.status(200).json(expenses)
  } catch(error) {
    return res.status(500).json(error)
  }
}

const create = async (req, res) => {
  try {
    const newExpense = await new Expense(req.body)
    await newExpense.save()
    await Profile.updtaeOne(
      {_id: req.user.profile },
      { $push: { expenses: newExpense} }
    )
    return res.status(201).json(newExpense)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    )
    return res.status(200).json(updatedExpense)
  } catch(error) {
    return res.status(500).json(error)
  }
}

const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req,params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.groups.remove({_id: req.params.id})
    await profile.save()
    return res.status(204).end()
  } catch(error) {
    return res.status(500).json(error)
  }
}
