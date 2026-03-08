// FDA Flush List & Non-Flush List data for RxDispose flushability checker.
// Source: FDA guidelines on safe medication disposal.
//
// TO UPDATE: Add medications to flushList or nonFlushList as FDA guidelines are updated.
// Reference: https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-fdas-flush-list-certain-medicines
//
// Medications are stored in lowercase for case-insensitive matching.

export const flushList = [
  "Buprenorphine",
  "Fentanyl",
  "Hydrocodone",
  "Hydromorphone",
  "Meperidine",
  "Methadone",
  "Morphine",
  "Oxycodone",
  "Oxymorphone",
  "Tapentadol",
  "Tramadol",
  "Diazepam",
  "Methylphenidate",
  "Sodium oxybate",
  "Almotriptan",
  "Buprenorphine and naloxone",
  "Dantrolene",
];

// Non-flush list (for demo purposes — these are common medications NOT on the FDA flush list)
export const nonFlushList = [
  "Ibuprofen",
  "Acetaminophen",
  "Amoxicillin",
  "Lisinopril",
  "Atorvastatin",
  "Metformin",
  "Sertraline",
  "Omeprazole",
  "Amlodipine",
  "Levothyroxine",
  "Azithromycin",
  "Prednisone",
  "Albuterol",
  "Gabapentin",
  "Losartan",
  "Pantoprazole",
  "Montelukast",
  "Fluoxetine",
  "Escitalopram",
  "Citalopram",
];

// Combined list for autocomplete
export const allMedications = [...new Set([...flushList, ...nonFlushList])].sort();

// Check if a medication is on the flush list (case-insensitive)
export function checkFlushable(name) {
  const lower = name.toLowerCase().trim();
  if (flushList.some((m) => m.toLowerCase() === lower)) return "flush";
  if (nonFlushList.some((m) => m.toLowerCase() === lower)) return "no-flush";
  return "unknown";
}
