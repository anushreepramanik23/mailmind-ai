import {
  getInbox,
  getMessage,
  searchEmails,
} from "../services/gmail.service.js";

export async function inbox(req, res) {
  try {
    const emails = await getInbox(req.user.id);

    res.json({
      success: true,
      emails,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function email(req, res) {
  try {
    const message = await getMessage(
      req.user.id,
      req.params.id
    );

    res.json({
      success: true,
      message,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function search(req, res) {
  try {
    const emails = await searchEmails(
      req.user.id,
      req.query.q || ""
    );

    res.json({
      success: true,
      emails,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}