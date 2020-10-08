export var items = [
    {
        "name": "loog",
        "texture": {
            "item": {
                "path": "loog.png",
            },
            "block": {
                "path": {
                    "upp": "",
                    "down": "",
                    "front": "",
                    "back": "",
                    "right": "",
                    "left": "",
                },
            },
        },
        "data": {
            "stack": 64,
            "plasable": true,
        },
        "recipes": [
            
        ],
    },
    {
        "name": "plank",
        "texture": {
            "item": {
                "path": "plank.png",
            },
            "block": {
                "path": {
                    "upp": "",
                    "down": "",
                    "front": "",
                    "back": "",
                    "right": "",
                    "left": "",
                },
            },
        },
        "data": {
            "stack": 64,
            "plasable": true,
        },
        "recipes": [
            {
                "items": ["loog", "", "", ""],
                "interfase": "2x2_crafting",
                "shaped": true,
                "outputPlace": 5,
                "count": 4,
            },
            {
                "items": ["", "loog", "", ""],
                "interfase": "2x2_crafting",
                "shaped": true,
                "outputPlace": 5,
                "count": 4,
            },
            {
                "items": ["", "", "loog", ""],
                "interfase": "2x2_crafting",
                "shaped": true,
                "outputPlace": 5,
                "count": 4,
            },
            {
                "items": ["", "", "", "loog"],
                "interfase": "2x2_crafting",
                "shaped": true,
                "outputPlace": 5,
                "count": 4,
            },
        ],
    },
    {
        "name": "coding",
        "texture": {
            "item": {
                "path": "Ultra-Codning.png",
            },
            "block": {
                "path": {
                    "upp": "",
                    "down": "",
                    "front": "",
                    "back": "",
                    "right": "",
                    "left": "",
                },
            },
        },
        "data": {
            "stack": 64,
            "plasable": true,
        },
        "recipes": [
            {
                "items": ["plank", "", "", "plank"],
                "interfase": "2x2_crafting",
                "shaped": true,
                "outputPlace": 5,
                "count": 2,
            },
            {
                "items": ["", "plank", "plank", ""],
                "interfase": "2x2_crafting",
                "shaped": true,
                "outputPlace": 5,
                "count": 2,
            },
            {
                "items": ["plank", "plank", "plank", "plank"],
                "interfase": "2x2_crafting",
                "shaped": true,
                "outputPlace": 5,
                "count": 4,
            },
        ],
    },
];
