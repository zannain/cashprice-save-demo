class Drug {
  brandName?: string;
  dosageFromGroup?: string;
  drugClass?: string;
  ingredients?: string;
  medicationName?: string;
  ndc?: string;
  pillNonPill?: string;
  rxcui?: string;
  slug?: string;
  source?: string;
  strength?: string;
  unitPrice?: string;
  unitPriceMultiplier?: string;
  url?: string;
  drugId?: string;
  quantity?: number;
  description?: string;
  issueDate?: Date | "";
  refills?: number;
  constructor() {
    this.medicationName = "";
    this.strength = "";
    this.quantity = 0;
    this.pillNonPill = "";
    this.unitPrice = "";
    this.description = "";
    this.issueDate = "";
    this.refills = 0;
  }
}

export default Drug;
