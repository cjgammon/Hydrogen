var H = {};

H.Canvas = function (w, h) {
    var inst = this,
        ctx;

    if (typeof(w) == "string") {
        inst.el = document.getElementById(w);
        inst.w = inst.el.width;
        inst.h = inst.el.height;
    } else {
        inst.el = document.createElement('canvas');
        inst.w = w;
        inst.h = h;
        inst.el.width = w;
        inst.el.height = h;
    }

    inst.ctx = inst.el.getContext('2d');
    inst.children = [];

    inst.addChild = function (c) {
        inst.children.push(c);
    };

    inst.addChildAtIndex = function (c, index) {
        inst.children.splice(index, 0, c);
    };

    inst.removeChild = function (c) {
        var i;

        for (i = 0; i < inst.children.length; i += 1) {
            if (inst.children[i] == c) {
                inst.children.splice(i, 1);
            }
        }
    };

    inst.render = function () {

        inst.ctx.clearRect(0, 0, inst.w, inst.h);
        for (i = 0; i < inst.children.length; i += 1) {
            inst.children[i].render(inst.ctx);
        }
    };
};

H.Sprite = function (t) {
    var inst = this;
    
    this.ox = 0;
    this.oy = 0;
    this.x = 0;
    this.y = 0;
    this._sx = 1;
    this._sy = 1;
    this.r = 0;

    Object.defineProperties(inst, {
        "s": {
            "get": function() {
                return inst._sx;
            },
             "set": function(s) {
                inst._sx = s;
                inst._sy = s;
             }
         },
         "sx": {
             "get": function () {
                 return inst._sx;
             },
             "set": function (sx) {
                inst._sx = sx;
             }
         },
         "sy": {
            "get": function () {
                return inst._sy;
            },
            "set": function (sy) {
                inst._sy = sy;
            }
         }
    });

    this.tex = t;

    this.render = function (ctx) {

        ctx.save();

        ctx.translate(inst.x, inst.y);
        ctx.translate(inst.ox, inst.oy);
        ctx.rotate(inst.r);
        ctx.scale(inst._sx, inst._sy);
        ctx.translate(-inst.x, -inst.y);
        ctx.translate(-inst.ox, -inst.oy);

        ctx.drawImage(inst.tex, 0, 0);
        ctx.restore();
    };
};

