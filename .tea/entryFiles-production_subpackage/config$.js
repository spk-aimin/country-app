
const g = typeof global !== 'undefined' ? global : self;
g.appXAppJson = {
  "app": {
    "$homepage": "pages/index/index",
    "subPackages": [
      {
        "root": "pages/user",
        "pages": [
          "index/index"
        ]
      },
      {
        "root": "pages/news",
        "pages": [
          "detail/detail"
        ]
      }
    ]
  }
};
