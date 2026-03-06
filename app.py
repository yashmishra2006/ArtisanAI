"""
ArtisanAI Flask Application
============================
Two separate portal sections:
  • /shop/     — Buyer / Shopper pages
  • /creator/  — Artisan / Seller pages
  • /auth      — Login / Sign-up (shared)
"""

from flask import Flask, Blueprint, render_template, redirect, url_for

app = Flask(__name__)

# ════════════════════════════════════════════════
#   AUTH Blueprint
# ════════════════════════════════════════════════
auth_bp = Blueprint("auth", __name__, url_prefix="/auth")


@auth_bp.route("/", endpoint="login")
@auth_bp.route("/signup", endpoint="signup")
def login():
    """Login / Sign-up page for artisan sellers."""
    return render_template("auth.html")


# ════════════════════════════════════════════════
#   SHOP  (Buyer / Shopper) Blueprint
# ════════════════════════════════════════════════
shop = Blueprint("shop", __name__, url_prefix="/shop")


@shop.route("/", endpoint="index")
def index():
    """Landing page — shop front."""
    return render_template("shop/index.html")


@shop.route("/marketplace", endpoint="marketplace")
def marketplace():
    """Browse all artisan products."""
    return render_template("shop/marketplace.html")


@shop.route("/product/<int:product_id>", endpoint="product_detail")
@shop.route("/product", endpoint="product_detail_default")
def product_detail(product_id=1):
    """Individual product detail page."""
    return render_template("shop/product_detail.html", product_id=product_id)


@shop.route("/become-a-seller", endpoint="become_seller")
def become_seller():
    """Redirect 'Become a Seller' CTA to auth page."""
    return redirect(url_for("auth.login"))


# ════════════════════════════════════════════════
#   CREATOR  (Artisan / Seller) Blueprint
# ════════════════════════════════════════════════
creator = Blueprint("creator", __name__, url_prefix="/creator")


@creator.route("/dashboard", endpoint="dashboard")
def dashboard():
    """Artisan seller dashboard overview."""
    return render_template("creator/dashboard.html")


@creator.route("/collections", endpoint="collections")
def collections():
    """Product collections / listings management."""
    return render_template("creator/collections.html")


@creator.route("/ai-photo-studio", endpoint="ai_photo_studio")
def ai_photo_studio():
    """AI-powered product photography studio."""
    return render_template("creator/ai_photo_studio.html")


@creator.route("/digital-provenance", endpoint="digital_provenance")
def digital_provenance():
    """Digital provenance certificate management."""
    return render_template("creator/digital_provenance.html")


@creator.route("/finance-hub", endpoint="finance_hub")
def finance_hub():
    """Seller finance & earnings hub."""
    return render_template("creator/finance_hub.html")


@creator.route("/training", endpoint="training")
def training():
    """Skill development & training portal."""
    return render_template("creator/training.html")


@creator.route("/community", endpoint="community")
def community():
    """Artisan community forum."""
    return render_template("creator/community.html")


@creator.route("/settings", endpoint="settings")
def settings():
    """Account settings page."""
    return render_template("creator/settings.html")


# ════════════════════════════════════════════════
#   Root redirect
# ════════════════════════════════════════════════
@app.route("/")
def root():
    """Redirect root to shop landing page."""
    return redirect(url_for("shop.index"))


# ────────────────────────────────────────────────
app.register_blueprint(auth_bp)
app.register_blueprint(shop)
app.register_blueprint(creator)
# ────────────────────────────────────────────────

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
