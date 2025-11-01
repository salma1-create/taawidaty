import pandas as pd
import json
import re

# Read the Excel file
excel_file = r"C:\Users\LENOVO\Desktop\dawa-calcul-plus\ref-des-medicaments-cnops-2014 (1).xlsx"

print("Reading Excel file...")
df = pd.read_excel(excel_file, engine='openpyxl')

print(f"\n=== Processing {len(df)} medications from CNOPS database ===\n")

# Function to extract percentage from string like "70%"
def extract_percentage(value):
    if pd.isna(value):
        return 0
    if isinstance(value, str):
        match = re.search(r'(\d+)', value)
        return int(match.group(1)) if match else 0
    return int(value)

# Process the data
medications = []

for idx, row in df.iterrows():
    try:
        # Extract data from columns
        name = str(row['NOM']).strip() if pd.notna(row['NOM']) else ""
        dci = str(row['DCI1']).strip() if pd.notna(row['DCI1']) else ""
        dosage = str(row['DOSAGE1']).strip() if pd.notna(row['DOSAGE1']) else ""
        unit = str(row['UNITE_DOSAGE1']).strip() if pd.notna(row['UNITE_DOSAGE1']) else ""
        forme = str(row['FORME']).strip() if pd.notna(row['FORME']) else ""
        presentation = str(row['PRESENTATION']).strip() if pd.notna(row['PRESENTATION']) else ""
        ppv = float(row['PPV']) if pd.notna(row['PPV']) and row['PPV'] != 0 else 0
        prix_br = float(row['PRIX_BR']) if pd.notna(row['PRIX_BR']) else ppv
        taux_remb = extract_percentage(row['TAUX_REMBOURSEMENT'])
        princeps_generique = str(row['PRINCEPS_GENERIQUE']).strip() if pd.notna(row['PRINCEPS_GENERIQUE']) else ""
        
        # Skip medications with no price or no name
        if ppv == 0 or not name:
            continue
        
        # Calculate reimbursement amount
        reimbursement_amount = (prix_br * taux_remb) / 100
        patient_pays = max(0, ppv - reimbursement_amount)
        
        # Create full dosage string
        full_dosage = f"{dosage} {unit}" if dosage and unit else ""
        
        # Create medication object
        medication = {
            "id": idx + 1,
            "name": name,
            "dci": dci,
            "dosage": full_dosage,
            "forme": forme,
            "presentation": presentation,
            "ppv": round(ppv, 2),  # Public sale price
            "prix_br": round(prix_br, 2),  # Base reimbursement price
            "taux_remb": taux_remb,  # Reimbursement rate %
            "reimbursement_amount": round(reimbursement_amount, 2),
            "patient_pays": round(patient_pays, 2),
            "type": "Princeps" if princeps_generique == "P" else "Générique" if princeps_generique == "G" else "Unknown",
            "insurance": "CNOPS"
        }
        
        medications.append(medication)
        
    except Exception as e:
        print(f"Error processing row {idx}: {e}")
        continue

print(f"✓ Successfully processed {len(medications)} medications")
print(f"✓ Skipped {len(df) - len(medications)} invalid entries")

# Save to JSON file
output_file = "src/data/medications-cnops.json"
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(medications, f, ensure_ascii=False, indent=2)

print(f"\n✓ Data saved to: {output_file}")

# Display some statistics
print("\n=== Statistics ===")
print(f"Total medications: {len(medications)}")
print(f"Average PPV: {sum(m['ppv'] for m in medications) / len(medications):.2f} MAD")
print(f"Medications with 70% reimbursement: {sum(1 for m in medications if m['taux_remb'] == 70)}")
print(f"Medications with 90% reimbursement: {sum(1 for m in medications if m['taux_remb'] == 90)}")
print(f"Medications with 0% reimbursement: {sum(1 for m in medications if m['taux_remb'] == 0)}")

# Show sample medications
print("\n=== Sample Medications ===")
for i, med in enumerate(medications[:5]):
    print(f"\n{i+1}. {med['name']}")
    print(f"   DCI: {med['dci']}")
    print(f"   PPV: {med['ppv']} MAD")
    print(f"   Reimbursement: {med['taux_remb']}% → {med['reimbursement_amount']} MAD")
    print(f"   Patient pays: {med['patient_pays']} MAD")
