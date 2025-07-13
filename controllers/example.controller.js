module.exports.example = (req, res) => {
    try {
        res.status(200).json({ message: "SUC_HELLO_WORLD" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "ERR_INTERNAL_SERVER_ERROR" });
    }
};
