import ListedItem from "../models/itemList.js";

/**
 * @desc Get all listed items with required fields
 * @route GET /api/itemlist/all
 * @access Public
 */
const getListedItems = async (req, res) => {
  try {
    const items = await ListedItem.find()
      .populate("listedBy", "name contact address") // Populate listedBy details
      .select("itemName Description quantity cost expiryDate feeds listedBy"); // Select required fields

    const formattedItems = items.map((item) => ({
      itemName: item.itemName,
      listingType:item.listingType,
      description: item.Description,
      quantity: item.quantity,
      cost: item.cost,
      feeds: item.feeds || 1, // Default feeds if missing
      location: item.listedBy?.contact || "N/A", // Ensure contact exists
      address: item.listedBy?.address || "N/A", // Ensure address exists
      expiryDate: item.expiryDate,
      listedBy: item.listedBy?.name || "Unknown", // Ensure listedBy name exists
    }));

    res.status(200).json(formattedItems);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc Get a single item by ID
 * @route GET /api/itemlist/:id
 * @access Public
 */
const getItemById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find item by ID and populate the listedBy field
    const item = await ListedItem.findById(id).populate("listedBy", "name contact address");

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({
      itemName: item.itemName,
      description: item.Description,
      listingType:item.listingType,
      quantity: item.quantity,
      cost: item.cost,
      feeds: item.feeds || 1,
      location: item.listedBy?.contact || "N/A",
      address: item.listedBy?.address || "N/A",
      expiryDate: item.expiryDate,
      listedBy: item.listedBy?.name || "Unknown",
    });
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getListedItems, getItemById };
