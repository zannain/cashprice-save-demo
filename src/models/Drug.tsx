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

  constructor() {
    this.medicationName = "";
    this.strength = "";
    this.quantity = 0;
    this.pillNonPill = "";
    this.unitPrice = "";
  }
}

export default Drug;
