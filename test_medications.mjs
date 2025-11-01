import { readFileSync } from 'fs';

const medicationsData = JSON.parse(readFileSync('./src/data/medications-cnops.json', 'utf-8'));

console.log('=== CNOPS Medications Database Test ===\n');

console.log(`✓ Total medications loaded: ${medicationsData.length}`);

// Test search functionality
function searchMedication(query) {
  const searchTerm = query.toLowerCase();
  return medicationsData.filter(med =>
    med.name.toLowerCase().includes(searchTerm) ||
    med.dci.toLowerCase().includes(searchTerm)
  );
}

// Test searches
const testQueries = ['PARACETAMOL', 'DOLIPRANE', 'AMOXICILLINE', 'ASPIRINE', 'IBUPROFEN'];

console.log('\n=== Search Tests ===');
testQueries.forEach(query => {
  const results = searchMedication(query);
  console.log(`\nQuery: "${query}" → Found ${results.length} results`);
  if (results.length > 0) {
    console.log(`  Example: ${results[0].name}`);
    console.log(`  DCI: ${results[0].dci}`);
    console.log(`  PPV: ${results[0].ppv} MAD`);
    console.log(`  Reimbursement: ${results[0].taux_remb}%`);
  }
});

// Statistics
console.log('\n=== Database Statistics ===');
const withReimbursement = medicationsData.filter(m => m.taux_remb > 0);
const avgPrice = medicationsData.reduce((sum, m) => sum + m.ppv, 0) / medicationsData.length;
const avgReimbursement = withReimbursement.reduce((sum, m) => sum + m.reimbursement_amount, 0) / withReimbursement.length;

console.log(`Average medication price: ${avgPrice.toFixed(2)} MAD`);
console.log(`Medications with reimbursement: ${withReimbursement.length} (${((withReimbursement.length/medicationsData.length)*100).toFixed(1)}%)`);
console.log(`Average reimbursement amount: ${avgReimbursement.toFixed(2)} MAD`);

console.log('\n✓ All tests completed successfully!');
