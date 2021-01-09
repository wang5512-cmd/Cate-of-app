const hotcate = require("././cookbook-hotcate.json");
const list = require("././cookbook-list.json");
const category = require("././cookbook-category.json");
const detail = require("././cookbook-detail.json");

module.exports = () => {
  return {
    hotcate,
    list,
    category,
    detail,
  };
};
