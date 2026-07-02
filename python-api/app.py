from fastapi import FastAPI
from pydantic import BaseModel
from reportlab.pdfgen import canvas
from datetime import datetime
import os

app = FastAPI()

class DemandeDevis(BaseModel):
    nom_client: str
    email: str
    trajet: str
    passagers: int
    date_depart: str
    commentaire: str | None = None

@app.post("/generer-devis")
def generer_devis(demande: DemandeDevis):
    prix_base = 500
    prix_passagers = demande.passagers * 15
    prix_total = prix_base + prix_passagers

    os.makedirs("/documents", exist_ok=True)

    filename = f"devis_{demande.nom_client.replace(' ', '_')}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    filepath = f"/documents/{filename}"

    pdf = canvas.Canvas(filepath)
    pdf.drawString(100, 800, "Devis - Digitalisation des process")
    pdf.drawString(100, 760, f"Client : {demande.nom_client}")
    pdf.drawString(100, 735, f"Email : {demande.email}")
    pdf.drawString(100, 710, f"Trajet : {demande.trajet}")
    pdf.drawString(100, 685, f"Nombre de passagers : {demande.passagers}")
    pdf.drawString(100, 660, f"Date de départ : {demande.date_depart}")
    pdf.drawString(100, 620, f"Prix estimé : {prix_total} €")
    pdf.save()

    return {
        "message": "Devis généré avec succès",
        "prix_total": prix_total,
        "fichier_pdf": filepath
    }