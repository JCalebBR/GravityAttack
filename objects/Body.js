class Body {
    constructor(_id, _name, _mass, _r, _temp, _pos, _vel, _col,
        _children) {
        this.id = _id;
        this.name = _name;
        this.mass = _mass;
        this.r = _r;
        this.temp = _temp;
        this.pos = _pos;
        this.vel = _vel;
        this.col = _col;
        this.children = _children;

    }

    show() {
        fill(this.col);
        scale(zoom);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }

    update() {

    }

    applyForce(f) {

    }

    setColor(_col) {
        this.col = color(_col);
    }
}