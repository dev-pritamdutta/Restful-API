export const fetch = async (req, res) => {
  try {
    return res.json("Hello world");
  } catch (error) {
    res.status(500).json({ erro: "Internal server error" });
  }
};
