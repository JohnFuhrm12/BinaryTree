class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    };
};

class Tree {
    constructor(root) {
        this.root = root;
    };
};

function buildTree(arr) {
    //
};

// Print Tree to Console
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    };

    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    };

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    };
};

prettyPrint();

  // node app.js