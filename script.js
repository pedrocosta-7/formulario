let ES = ["MOX", "MOY", "MOZ",   "MPA", "MPB",
    "MPC", "MPD", "MPE", "MPF", "MPG", "MPH",
    "MPI", "MPJ", "MPK", "MPL", "MPM", "MPN",
    "MPO", "MPP", "MPQ", "MPR", "MPS", "MPT",
    "MPU", "MPV", "MPW", "MPX", "MPY", "MPZ",
    "MQA", "MQB", "MQC", "MQD", "MQE", "MQF",
    "MQG", "MQH", "MQI", "MQJ", "MQK", "MQL",
    "MQM", "MQN", "MQO", "MQP", "MQQ", "MQR",
    "MQS", "MQT", "MQU", "MQV", "MQW", "MQX",
    "MQY", "MQZ", "MRA", "MRB", "MRC", "MRD",
    "MRE", "MRF", "MRG", "MRH", "MRI", "MRJ",
    "MRK", "MRL", "MRM", "MRN", "MRO", "MRP",
    "MRQ", "MRR", "MRS", "MRT", "MRU", "MRV",
    "MRW", "MRX", "MRY", "MRZ", "MSA", "MSB",
    "MSC", "MSD", "MSE", "MSF", "MSG", "MSH",
    "MSI", "MSJ", "MSK", "MSL", "MSM", "MSN",
    "MSO", "MSP", "MSQ", "MSR", "MSS", "MST",
    "MSU", "MSV", "MSW", "MSX", "MSY", "MSZ",
    "MTA", "MTB", "MTC", "MTD", "MTE", "MTF",
    "MTG", "MTH", "MTI", "MTJ", "MTK", "MTL",
    "MTM", "MTN", "MTO", "MTP", "MTQ", "MTR",
    "MTS", "MTT", "MTU", "MTV", "MTW", "MTX",
    "MTY", "MTZ", "OCV", "OCW", "OCX", "OCY", 
    "ODA", "ODB", "ODC", "ODD", "ODE",
    "ODF", "ODG", "ODH", "ODI", "ODJ",
    "ODK", "ODL", "ODM", "ODN", "ODO",
    "ODP", "ODQ", "ODR", "ODS", "ODT","OCZ",
    "OVE", "OVF", "OVH", "OVI", "OVJ", "OVK", 
    "OVL", "OYD", "OYE", "OYF", "OYG", "OYH",
    "OYI", "OYJ", "OYK", "PPA", "PPB", "PPC",
    "PPK", "PPL", "PPM", "PPN", "PPO", "PPP",
    "PPU", "PPV", "PPW", "PPX", "PPY", "PPZ",
    "PPD", "PPE", "PPF", "PPG", "PPH", "PPI", 
    "PPQ", "PPR", "PPS", "PPT", "PPJ", "QRB",
    "QRC", "QRD", "QRE", "QRF", "QRG", "QRH",
    "QRI", "QRJ", "QRK", "QRL", "QRM", "RBA",
    "RBB", "RBC", "RBD", "RBE", "RBF", "RBG",
    "RBH", "RBI", "RBJ", "RQM", "RQN", "RQP",
    "RQQ", "RQR", "RQS", "RQT", "RQU", "RQV",
]

let RJ = ["KMF", "KMG", "KMH", "KMI", "KMJ", "KMK", "KML", "KMM", "KMN",
  "KMO", "KMP", "KMQ", "KMR", "KMS", "KMT", "KMU", "KMV", "KMW", "KMX",
  "KMY", "KMZ", "KNA", "KNB", "KNC", "KND", "KNE", "KNF", "KNG", "KNH",
  "KNI", "KNJ", "KNK", "KNL", "KNM", "KNN", "KNO", "KNP", "KNQ", "KNR",
  "KNS", "KNT", "KNU", "KNV", "KNW", "KNX", "KNY", "KNZ", "KOA", "KOB",
  "KOC", "KOD", "KOE", "KOF", "KOG", "KOH", "KOI", "KOJ", "KOK", "KOL",
  "KOM", "KON", "KOO", "KOP", "KOQ", "KOR", "KOS", "KOT", "KOU", "KOV",
  "KOW", "KOX", "KOY", "KOZ", "KPA", "KPB", "KPC", "KPD", "KPE", "KPF",
  "KPG", "KPH", "KPI", "KPJ", "KPK", "KPL", "KPM", "KPN", "KPO", "KPP",
  "KPQ", "KPR", "KPS", "KPT", "KPU", "KPV", "KPW", "KPX", "KPY", "KPZ",
  "KQA", "KQB", "KQC", "KQD", "KQE", "KQF", "KQG", "KQH", "KQI", "KQJ",
  "KQK", "KQL", "KQM", "KQN", "KQO", "KQP", "KQQ", "KQR", "KQS", "KQT",
  "KQU", "KQV", "KQW", "KQX", "KQY", "KQZ", "KRA", "KRB", "KRC", "KRD",
  "KRE", "KRF", "KRG", "KRH", "KRI", "KRJ", "KRK", "KRL", "KRM", "KRN",
  "KRO", "KRP", "KRQ", "KRR", "KRS", "KRT", "KRU", "KRV", "KRW", "KRX",
  "KRY", "KRZ", "KSA", "KSB", "KSC", "KSD", "KSE", "KSF", "KSG", "KSH",
  "KSI", "KSJ", "KSK", "KSL", "KSM", "KSN", "KSO", "KSP", "KSQ", "KSR",
  "KSS", "KST", "KSU", "KSV", "KSW", "KSX", "KSY", "KSZ", "KTA", "KTB",
  "KTC", "KTD", "KTE", "KTF", "KTG", "KTH", "KTI", "KTJ", "KTK", "KTL",
  "KTM", "KTN", "KTO", "KTP", "KTQ", "KTR", "KTS", "KTT", "KTU", "KTV",
  "KTW", "KTX", "KTY", "KTZ", "KUA", "KUB", "KUC", "KUD", "KUE", "KUF",
  "KUG", "KUH", "KUI", "KUJ", "KUK", "KUL", "KUM", "KUN", "KUO", "KUP",
  "KUQ", "KUR", "KUS", "KUT", "KUU", "KUV", "KUW", "KUX", "KUY", "KUZ",
  "KVA", "KVB", "KVC", "KVD", "KVE", "KVF", "KVG", "KVH", "KVI", "KVJ",
  "KVK", "KVL", "KVM", "KVN", "KVO", "KVP", "KVQ", "KVR", "KVS", "KVT",
  "KVU", "KUV", "KVW", "KVX", "KVY", "KVZ", "KWA", "KWB", "KWC", "KWD",
  "KWE", "KWF", "KWG", "KWH", "KWI", "KWJ", "KWK", "KWL", "KWM", "KWN",
  "KWO", "KWP", "KWQ", "KWR", "KWS", "KWT", "KWU", "KWV", "KWW", "KWX",
  "KWY", "KWZ", "KXA", "KXB", "KXC", "KXD", "KXE", "KXF", "KXG", "KXH",
  "KXI", "KXJ", "KXK", "KXL", "KXM", "KXN", "KXO", "KXP", "KXQ", "KXR",
  "KXS", "KXT", "KXU", "KXV", "KXW", "KXX", "KXY", "KXZ", "KYA", "KYB",
  "KYC", "KYD", "KYE", "KYF", "KYG", "KYH", "KYI", "KYJ", "KYK", "KYL",
  "KYM", "KYN", "KYO", "KYP", "KYQ", "KYR", "KYS", "KYT", "KYU", "KYV",
  "KYW", "KYX", "KYY", "KYZ", "KZA", "KZB", "KZC", "KZD", "KZE", "KZF",
  "KZG", "KZH", "KZI", "KZJ", "KZK", "KZL", "KZM", "KZN", "KZO", "KZP",
  "KZQ", "KZR", "KZS", "KZT", "KZU", "KZV", "KZW", "KZX", "KZY", "KZZ",
  "LAA", "LAB", "LAC", "LAD", "LAE", "LAF", "LAG", "LAH", "LAI", "LAJ",
  "LAK", "LAL", "LAM", "LAN", "LAO", "LAP", "LAQ", "LAR", "LAS", "LAT",
  "LAU", "LAV", "LAW", "LAX", "LAY", "LAZ", "LBA", "LBB", "LBC", "LBD",
  "LBE", "LBF", "LBG", "LBH", "LBI", "LBJ", "LBK", "LBL", "LBM", "LBN",
  "LBO", "LBP", "LBQ", "LBR", "LBS", "LBT", "LBU", "LBV", "LBW", "LBX",
  "LBY", "LBZ", "LCA", "LCB", "LCC", "LCD", "LCE", "LCF", "LCG", "LCH",
  "LCI", "LCJ", "LCK", "LCL", "LCM", "LCN", "LCO", "LCP", "LCQ", "LCR",
  "LCS", "LCT", "LCU", "LCV", "LCW", "LCX", "LCY", "LCZ", "LDA", "LDB",
  "LDC", "LDD", "LDE", "LDF", "LDG", "LDH", "LDI", "LDJ", "LDK", "LDL",
  "LDM", "LDN", "LDO", "LDP", "LDQ", "LDR", "LDS", "LDT", "LDU", "LDV",
  "LEE", "LEF", "LEG", "LEH", "LEI", "LEJ", "LEK", "LEL", "LEM", "LEN",
  "LEO", "LEP", "LEQ", "LER", "LES", "LET", "LEU", "LEV", "LEW", "LEX",
  "LEY", "LEZ", "LFA", "LFB", "LFC", "LFD", "LFE", "LFF", "LFG", "LFH",
  "LFI", "LFJ", "LFK", "LFL", "LFM", "LFN", "LFO", "LFP", "LFQ", "LFR",
  "LFS", "LFT", "LFU", "LFV", "LFW", "LFX", "LFY", "LFZ", "LGA", "LGB",
  "LGK", "LGL", "LGM", "LGN", "LGO", "LGP", "LGQ", "LGR", "LGS", "LGT",
  "LGU", "LGV", "LGW", "LGX", "LGY", "LGZ", "LHA", "LHB", "LHC", "LHD",
  "LHE", "LHF", "LHG", "LHH", "LHI", "LHJ", "LHK", "LHL", "LHM", "LHN",
  "LHO", "LHP", "LHQ", "LHR", "LHS", "LHT", "LHU", "LHV", "LHW", "LHX",
  "LHY", "LHZ", "LIA", "LIB", "LIC", "LID", "LIE", "LIF", "LIG", "LIH",
  "LII", "LIJ", "LIK", "LIL", "LIM", "LIN", "LIO", "LIP", "LIQ", "LIR",
  "LIS", "LIT", "LIU", "LIV", "LIW", "LIX", "LIY", "LIZ", "LJA", "LJB", 
  "LJK", "LJL", "LJM", "LJN", "LJO", "LJP", "LJQ", "LJR", "LJS", "LJT",
  "LJU", "LJV", "LJW", "LJX", "LJY", "LJZ", "LKA", "LKB", "LKC", "LKD",
  "LKE", "LKF", "LKG", "LKH", "LKI", "LKJ", "LKK", "LKL", "LKM", "LKN",
  "LKO", "LKP", "LKQ", "LKR", "LKS", "LKT", "LKU", "LKV", "LKW", "LKX",
  "LKY", "LKZ", "LLA", "LLB", "LLC", "LLD", "LLE", "LLF", "LLG", "LLH",
  "LLI", "LLJ", "LLK", "LLL", "LLM", "LLN", "LLO", "LLP", "LLQ", "LLR",
  "LLS", "LLT", "LLU", "LLV", "LLW", "LLX", "LLY", "LLZ", "LMA", "LMB", 
  "LMK", "LML", "LMM", "LMN", "LMO", "LMP", "LMQ", "LMR", "LMS", "LMT",
  "LMU", "LMV", "LMW", "LMX", "LMY", "LMZ", "LNA", "LNB", "LNC", "LND",
  "LNE", "LNF", "LNG", "LNH", "LNI", "LNJ", "LNK", "LNL", "LNM", "LNN",
  "LNO", "LNP", "LNQ", "LNR", "LNS", "LNT", "LNU", "LNV", "LNW", "LNX",
  "LNY", "LNZ", "LOA", "LOB", "LOC", "LOD", "LOE", "LOF", "LOG", "LOH",
  "LOI", "LOJ", "LOK", "LOL", "LOM", "LON", "LOO", "LOP", "LOQ", "LOR",
  "LOS", "LOT", "LOU", "LOV", "LOW", "LOX", "LOY", "LOZ", "LPA", "LPB", 
  "LPK", "LPL", "LPM", "LPN", "LPO", "LPP", "LPQ", "LPR", "LPS", "LPT",
  "LPU", "LPV", "LPW", "LPX", "LPY", "LPZ", "LQA", "LQB", "LQC", "LQD",
  "LQE", "LQF", "LQG", "LQH", "LQI", "LQJ", "LQK", "LQL", "LQM", "LQN",
  "LQO", "LQP", "LQQ", "LQR", "LQS", "LQT", "LQU", "LQV", "LQW", "LQX",
  "LQY", "LQZ", "LRA", "LRB", "LRC", "LRD", "LRE", "LRF", "LRG", "LRH",
  "LRI", "LRJ", "LRK", "LRL", "LRM", "LRN", "LRO", "LRP", "LRQ", "LRR",
  "LRS", "LRT", "LRU", "LRV", "LRW", "LRX", "LRY", "LRZ", "LSA", "LSB",
  "LSC", "LSD", "LSE", "LSF", "LSG", "LSH", "LSI", "LSJ", "LSK", "LSL",
  "LSM", "LSN", "LSO", "LSP", "LSQ", "LSR", "LSS", "LST", "LSU", "LSV",
  "LSW", "LSX", "LSY", "LSZ", "LTA", "LTB", "LTC", "LTD", "LTE", "LTF",
  "LTG", "LTH", "LTI", "LTJ", "LTK", "LTL", "LTM", "LTN", "LTO", "LTP",
  "LTQ", "LTR", "LTS", "LTT", "LTU", "LTV", "LTW", "LTX", "LTY", "LTZ",
  "LUA", "LUB", "LUC", "LUD", "LUE", "LUF", "LUG", "LUH", "LUI", "LUJ",
  "LUK", "LUL", "LUM", "LUN", "LUO", "LUP", "LUQ", "LUR", "LUS", "LUT",
  "LUU", "LUV", "LUW", "LUX", "LUY", "LUZ", "LVA", "LVB", "LVC", "LVD",
  "LVE", "LDW", "LDX", "LDY", "LDZ", "LEA", "LEB", "LEC", "LED", "LGC",
  "LGD", "LGE", "LGF", "LGG", "LGH", "LGI", "LGJ", "LJC", "LJD", "LJE",
  "LJF", "LJG", "LJH", "LJI", "LJJ", "LMC", "LMD", "LME", "LMF", "LMG",
  "LMH", "LMI", "LMJ", "LPC", "LPD", "LPE", "LPF", "LPG", "LPH", "LPI",
  "LPJ", "RIP", "RIQ", "RIR", "RIS", "RIT", "RIU", "RIV", "RIW", "RIX",
  "RJA", "RJB", "RJC", "RJD", "RJE", "RJF", "RJG", "RJH", "RJI", "RJJ", "RJK",
  "RJL", "RJM", "RJN", "RJO", "RJP", "RJQ", "RJR", "RJS", "RJT", "RJU", "RJV",
  "RJW", "RJX", "RJY", "RJZ", "RKA", "RKB", "RKC", "RKD", "RKE", "RKF", "RKG",
  "RKH", "RKI", "RKJ", "RKK", "RKL", "RKM", "RKN", "RKO", "RKP", "RKQ", "RKR",
  "RKS", "RKT", "RKU", "RKV", "RIY", "RIZ", "RIO"
]

let SP = [  "BFA", "BFB", "BFC", "BFD", "BFE", "BFF", "BFG", "BFH", "BFI", "BFJ",
    "BFK", "BFL", "BFM", "BFN", "BFO", "BFP", "BFQ", "BFR", "BFS", "BFT",
    "BFU", "BFV", "BFW", "BFX", "BFY", "BFZ", "BGA", "BGB", "BGC", "BGD",
    "BGE", "BGF", "BGG", "BGH", "BGI", "BGJ", "BGK", "BGL", "BGM", "BGN",
    "BGO", "BGP", "BGQ", "BGR", "BGS", "BGT", "BGU", "BGV", "BGW", "BGX",
    "BGY", "BGZ", "BHA", "BHB", "BHC", "BHD", "BHE", "BHF", "BHG", "BHH",
    "BHI", "BHJ", "BHK", "BHL", "BHM", "BHN", "BHO", "BHP", "BHQ", "BHR",
    "BHS", "BHT", "BHU", "BHV", "BHW", "BHX", "BHY", "BHZ", "BIA", "BIB",
    "BIC", "BID", "BIE", "BIF", "BIG", "BIH", "BII", "BIJ", "BIK", "BIL",
    "BIM", "BIN", "BIO", "BIP", "BIQ", "BIR", "BIS", "BIT", "BIU", "BIV",
    "BIW", "BIX", "BIY", "BIZ", "BJA", "BJB", "BJC", "BJD", "BJE", "BJF",
    "BJG", "BJH", "BJI", "BJJ", "BJK", "BJL", "BJM", "BJN", "BJO", "BJP",
    "BJQ", "BJR", "BJS", "BJT", "BJU", "BJV", "BJW", "BJX", "BJY", "BJZ",
    "BKA", "BKB", "BKC", "BKD", "BKE", "BKF", "BKG", "BKH", "BKI", "BKJ",
    "BKQ", "BKR", "BKS", "BKT", "BKU", "BKV", "BKW", "BKX", "BKY", "BKZ",
    "BLA", "BLB", "BLC", "BLD", "BLE", "BLF", "BLG", "BLH", "BLI", "BLJ",
    "BLK", "BLL", "BLM", "BLN", "BLO", "BLP", "BLQ", "BLR", "BLS", "BLT",
    "BLU", "BLV", "BLW", "BLX", "BLY", "BLZ", "BMA", "BMB", "BMC", "BMD",
    "BME", "BMF", "BMG", "BMH", "BMI", "BMJ", "BMK", "BML", "BMM", "BMN",
    "BMO", "BMP", "BMQ", "BMR", "BMS", "BMT", "BMU", "BMV", "BMW", "BMX",
    "BMY", "BMZ", "BNA", "BNB", "BNC", "BND", "BNE", "BNF", "BNG", "BNH",
    "BNI", "BNJ", "BNK", "BNL", "BNM", "BNN", "BNO", "BNP", "BNQ", "BNR",
    "BNS", "BNT", "BNU", "BNV", "BNW", "BNX", "BNY", "BNZ", "BOA", "BOB",
    "BOC", "BOD", "BOE", "BOF", "BOG", "BOH", "BOI", "BOJ", "BOK", "BOL",
    "BOM", "BON", "BOO", "BOP", "BOQ", "BOR", "BOS", "BOT", "BOU", "BOV",
    "BOW", "BOX", "BOY", "BOZ", "BPA", "BPB", "BPC", "BPD", "BPE", "BPF",
    "BPG", "BPH", "BPI", "BPJ", "BPK", "BPL", "BPM", "BPN", "BPO", "BPP",
    "BPQ", "BPR", "BPS", "BPT", "BPU", "BPV", "BPW", "BPX", "BPY", "BPZ",
    "BQA", "BQB", "BQC", "BQD", "BQE", "BQF", "BQG", "BQH", "BQI", "BQJ",
    "BQK", "BQL", "BQM", "BQN", "BQo", "BQP", "BQQ", "BQR", "BQS", "BQT",
    "BQU", "BQV", "BQW", "BQX", "BQY", "BQZ", "BRA", "BRB", "BRC", "BRD",
    "BRE", "BRF", "BRG", "BRH", "BRI", "BRJ", "BRK", "BRL", "BRM", "BRN",
    "BRO", "BRP", "BRQ", "BRR", "BRS", "BRT", "BRU", "BRV", "BRW", "BRX",
    "BRY", "BRZ", "BSA", "BSB", "BSC", "BSD", "BSE", "BSF", "BSG", "BSH",
    "BSI", "BSJ", "BSK", "BSL", "BSM", "BSN", "BSO", "BSP", "BSQ", "BSR",
    "BSS", "BST", "BSU", "BSV", "BSW", "BSX", "BSY", "BSZ", "BTA", "BTB",
    "BTC", "BTD", "BTE", "BTF", "BTG", "BTH", "BTI", "BTJ", "BTK", "BTL",
    "BTM", "BTN", "BTO", "BTP", "BTQ", "BTR", "BTS", "BTT", "BTU", "BTV",
    "BTW", "BTX", "BTY", "BTZ", "BUA", "BUB", "BUC", "BUD", "BUE", "BUF",
    "BUG", "BUH", "BUI", "BUJ", "BUK", "BUL", "BUM", "BUN", "BUO", "BUP",
    "BUQ", "BUR", "BUS", "BUT", "BUU", "BUV", "BUW", "BUX", "BUY", "BUZ",
    "BVA", "BVB", "BVC", "BVD", "BVE", "BVF", "BVG", "BVH", "BVI", "BVJ",
    "BVK", "BVL", "BVM", "BVN", "BVO", "BVP", "BVQ", "BVR", "BVS", "BVT",
    "BVU", "BVV", "BVW", "BVX", "BVY", "BVZ", "BWA", "BWB", "BWC", "BWD",
    "BWE", "BWF", "BWG", "BWH", "BWI", "BWJ", "BWK", "BWL", "BWM", "BWN",
    "BWO", "BWP", "BWQ", "BWR", "BWS", "BWT", "BWU", "BWV", "BWW", "BWX",
    "BWY", "BWZ", "BXA", "BXB", "BXC", "BXD", "BXE", "BXF", "BXG", "BXH",
    "BXI", "BXJ", "BXK", "BXL", "BXM", "BXN", "BXO", "BXP", "BXQ", "BXR",
    "BXS", "BXT", "BXU", "BXV", "BXW", "BXX", "BXY", "BXZ", "BYA", "BYB",
    "BYC", "BYD", "BYE", "BYF", "BYG", "BYH", "BYI", "BYJ", "BYK", "BYL",
    "BYM", "BYN", "BYO", "BYP", "BYQ", "BYR", "BYS", "BYT", "BYU", "BYV",
    "BYW", "BYX", "BYY", "BYZ", "BZA", "BZB", "BZC", "BZD", "BZE", "BZF",
    "BZG", "BZH", "BZI", "BZJ", "BZK", "BZL", "BZM", "BZN", "BZO", "BZP",
    "BZQ", "BZR", "BZS", "BZT", "BZU", "BZV", "BZW", "BZX", "BZY", "BZZ",
    "CAA", "CAB", "CAC", "CAD", "CAE", "CAF", "CAG", "CAH", "CAI", "CAJ",
  "CAK", "CAL", "CAM", "CAN", "CAO", "CAP", "CAQ", "CAR", "CAS", "CAT",
  "CAU", "CAV", "CAW", "CAX", "CAY", "CAZ", "CBA", "CBB", "CBC", "CBD",
  "CBE", "CBF", "CBG", "CBH", "CBI", "CBJ", "CBK", "CBL", "CBM", "CBN",
  "CBO", "CBP", "CBQ", "CBR", "CBS", "CBT", "CBU", "CBV", "CBW", "CBX",
  "CBY", "CBZ", "CCA", "CCB", "CCC", "CCD", "CCE", "CCF", "CCG", "CCH",
  "CCI", "CCJ", "CCK", "CCL", "CCM", "CCN", "CCO", "CCP", "CCQ", "CCR",
  "CCS", "CCT", "CCU", "CCV", "CCW", "CCX", "CCY", "CCZ", "CDA", "CDB",
  "CDC", "CDD", "CDE", "CDF", "CDG", "CDH", "CDI", "CDJ", "CDK", "CDL",
  "CDM", "CDN", "CDO", "CDP", "CDQ", "CDR", "CDS", "CDT", "CDU", "CDV",
  "CDW", "CDX", "CDY", "CDZ", "CEA", "CEB", "CEC", "CED", "CEE", "CEF",
  "CEG", "CEH", "CEI", "CEJ", "CEK", "CEL", "CEM", "CEN", "CEO", "CEP",
  "CEQ", "CER", "CES", "CET", "CEU", "CEV", "CEW", "CEX", "CEY", "CEZ",
  "CFA", "CFB", "CFC", "CFD", "CFE", "CFF", "CFG", "CFH", "CFI", "CFJ",
  "CFK", "CFL", "CFM", "CFN", "CFO", "CFP", "CFQ", "CFR", "CFS", "CFT",
  "CFU", "CFV", "CFW", "CFX", "CFY", "CFZ", "CGA", "CGB", "CGC", "CGD",
  "CGE", "CGF", "CGG", "CGH", "CGI", "CGJ", "CGK", "CGL", "CGM", "CGN",
  "CGO", "CGP", "CGQ", "CGR", "CGS", "CGT", "CGU", "CGV", "CGW", "CGX",
  "CGY", "CGZ", "CHA", "CHB", "CHC", "CHD", "CHE", "CHF", "CHG", "CHH",
  "CHI", "CHJ", "CHK", "CHL", "CHM", "CHN", "CHO", "CHP", "CHQ", "CHR",
  "CHS", "CHT", "CHU", "CHV", "CHW", "CHX", "CHY", "CHZ", "CIA", "CIB",
  "CIC", "CID", "CIE", "CIF", "CIG", "CIH", "CII", "CIJ", "CIK", "CIL",
  "CIM", "CIN", "CIO", "CIP", "CIQ", "CIR", "CIS", "CIT", "CIU", "CIV",
  "CIW", "CIX", "CIY", "CIZ", "CJA", "CJB", "CJC", "CJD", "CJE", "CJF",
  "CJG", "CJH", "CJI", "CJJ", "CJK", "CJL", "CJM", "CJN", "CJO", "CJP",
  "CJQ", "CJR", "CJS", "CJT", "CJU", "CJV", "CJW", "CJX", "CJY", "CJZ",
  "CKA", "CKB", "CKC", "CKD", "CKE", "CKF", "CKG", "CKH", "CKI", "CKJ",
  "CKK", "CKL", "CKM", "CKN", "CKO", "CKP", "CKQ", "CKR", "CKS", "CKT",
  "CKU", "CKV", "CKW", "CKX", "CKY", "CKZ", "CLA", "CLB", "CLC", "CLD",
  "CLE", "CLF", "CLG", "CLH", "CLI", "CLJ", "CLK", "CLL", "CLM", "CLN",
  "CLO", "CLP", "CLQ", "CLR", "CLS", "CLT", "CLU", "CLV", "CLW", "CLX",
  "CLY", "CLZ", "CMA", "CMB", "CMC", "CMD", "CME", "CMF", "CMG", "CMH",
  "CMI", "CMJ", "CMK", "CML", "CMM", "CMN", "CMO", "CMP", "CMQ", "CMR",
  "CMS", "CMT", "CMU", "CMV", "CMW", "CMX", "CMY", "CMZ", "CNA", "CNB",
  "CNC", "CND", "CNE", "CNF", "CNG", "CNH", "CNI", "CNJ", "CNK", "CNL",
  "CNM", "CNN", "CNO", "CNP", "CNQ", "CNR", "CNS", "CNT", "CNU", "CNV",
  "CNW", "CNX", "CNY", "CNZ", "COA", "COB", "COC", "COD", "COE", "COF",
  "COG", "COH", "COI", "COJ", "COK", "COL", "COM", "CON", "COO", "COP",
  "COQ", "COR", "COS", "COT", "COU", "COV", "COW", "COX", "COY", "COZ",
  "CPA", "CPB", "CPC", "CPD", "CPE", "CPF", "CPG", "CPH", "CPI", "CPJ",
  "CPK", "CPL", "CPM", "CPN", "CPO", "CPP", "CPQ", "CPR", "CPS", "CPT",
  "CPU", "CPV", "CPW", "CPX", "CPY", "CPZ", "CQA", "CQB", "CQC", "CQD",
  "CQE", "CQF", "CQG", "CQH", "CQI", "CQJ", "CQK", "CQL", "CQM", "CQN",
  "CQo", "CQP", "CQQ", "CQR", "CQS", "CQT", "CQU", "CQV", "CQW", "CQX",
  "CQY", "CQZ", "CRA", "CRB", "CRC", "CRD", "CRE", "CRF", "CRG", "CRH",
  "CRI", "CRJ", "CRK", "CRL", "CRM", "CRN", "CRO", "CRP", "CRQ", "CRR",
  "CRS", "CRT", "CRU", "CRV", "CRW", "CRX", "CRY", "CRZ", "CSA", "CSB",
  "CSC", "CSD", "CSE", "CSF", "CSG", "CSH", "CSI", "CSJ", "CSK", "CSL",
  "CSM", "CSN", "CSO", "CSP", "CSQ", "CSR", "CSS", "CST", "CSU", "CSV",
  "CSW", "CSX", "CSY", "CSZ", "CTA", "CTB", "CTC", "CTD", "CTE", "CTF",
  "CTG", "CTH", "CTI", "CTJ", "CTK", "CTL", "CTM", "CTN", "CTO", "CTP",
  "CTQ", "CTR", "CTS", "CTT", "CTU", "CTV", "CTW", "CTX", "CTY", "CTZ",
  "CUA", "CUB", "CUC", "CUD", "CUE", "CUF", "CUG", "CUH", "CUI", "CUJ",
  "CUK", "CUL", "CUM", "CUN", "CUO", "CUP", "CUQ", "CUR", "CUS", "CUT",
  "CUU", "CUV", "CUW", "CUX", "CUY", "CUZ", "CVA", "CVB", "CVC", "CVD",
  "CVE", "CVF", "CVG", "CVH", "CVI", "CVJ", "CVK", "CVL", "CVM", "CVN",
  "CVO", "CVP", "CVQ", "CVR", "CVS", "CVT", "CVU", "CVV", "CVW", "CVX",
  "CVY", "CVZ", "CWA", "CWB", "CWC", "CWD", "CWE", "CWF", "CWG", "CWH",
  "CWI", "CWJ", "CWK", "CWL", "CWM", "CWN", "CWO", "CWP", "CWQ", "CWR",
  "CWS", "CWT", "CWU", "CWV", "CWW", "CWX", "CWY", "CWZ", "CXA", "CXB",
  "CXC", "CXD", "CXE", "CXF", "CXG", "CXH", "CXI", "CXJ", "CXK", "CXL",
  "CXM", "CXN", "CXO", "CXP", "CXQ", "CXR", "CXS", "CXT", "CXU", "CXV",
  "CXW", "CXX", "CXY", "CXZ", "CYA", "CYB", "CYC", "CYD", "CYE", "CYF",
  "CYG", "CYH", "CYI", "CYJ", "CYK", "CYL", "CYM", "CYN", "CYO", "CYP",
  "CYQ", "CYR", "CYS", "CYT", "CYU", "CYV", "CYW", "CYX", "CYY", "CYZ",
  "CZA", "CZB", "CZC", "CZD", "CZE", "CZF", "CZG", "CZH", "CZI", "CZJ",
  "CZK", "CZL", "CZM", "CZN", "CZO", "CZP", "CZQ", "CZR", "CZS", "CZT",
  "CZU", "CZV", "CZW", "CZX", "CZY", "CZZ", "DAA", "DAB", "DAC", "DAD",
  "DAK", "DAL", "DAM", "DAN", "DAO", "DAP", "DAQ", "DAR", "DAS", "DAT",
  "DAU", "DAV", "DAW", "DAX", "DAY", "DAZ", "DBA", "DBB", "DBC", "DBD",
  "DBE", "DBF", "DBG", "DBH", "DBI", "DBJ", "DBK", "DBL", "DBM", "DBN",
  "DBO", "DBP", "DBQ", "DBR", "DBS", "DBT", "DBU", "DBV", "DBW", "DBX",
  "DBY", "DBZ", "DCA", "DCB", "DCC", "DCD", "DCE", "DCF", "DCG", "DCH",
  "DCI", "DCJ", "DCK", "DCL", "DCM", "DCN", "DCO", "DCP", "DCQ", "DCR",
  "DCS", "DCT", "DCU", "DCV", "DCW", "DCX", "DCY", "DCZ", "DEA", "DEB",
  "DEC", "DED", "DEE", "DEF", "DEG", "DEH", "DEI", "DEJ", "DEK", "DEL",
  "DEM", "DEN", "DEO", "DEP", "DEQ", "DER", "DES", "DET", "DEU", "DEV",
  "DEW", "DEX", "DEY", "DEZ", "DFA", "DFB", "DFC", "DFD", "DFE", "DFF",
  "DFG", "DFH", "DFI", "DFJ", "DFK", "DFL", "DFM", "DFN", "DFO", "DFP",
  "DFQ", "DFR", "DFS", "DFT", "DFU", "DFV", "DFW", "DFX", "DFY", "DFZ",
  "DGA", "DGB", "DGC", "DGD", "DGE", "DGF", "DGG", "DGH", "DGI", "DGJ",
  "DGK", "DGL", "DGM", "DGN", "DGO", "DGP", "DGQ", "DGR", "DGS", "DGT",
  "DGU", "DGV", "DGW", "DGX", "DGY", "DGZ", "DHA", "DHB", "DHC", "DHD",
  "DHE", "DHF", "DHG", "DHH", "DHI", "DHJ", "DHK", "DHL", "DHM", "DHN",
  "DHO", "DHP", "DHQ", "DHR", "DHS", "DHT", "DHU", "DHV", "DHW", "DHX",
  "DHY", "DHZ", "DIA", "DIB", "DIC", "DID", "DIE", "DIF", "DIG", "DIH",
  "DII", "DIJ", "DIK", "DIL", "DIM", "DIN", "DIO", "DIP", "DIQ", "DIR",
  "DIS", "DIT", "DIU", "DIV", "DIW", "DIX", "DIY", "DIZ", "DJA", "DJB",
  "DJC", "DJD", "DJE", "DJF", "DJG", "DJH", "DJI", "DJJ", "DJK", "DJL",
  "DJM", "DJN", "DJO", "DJP", "DJQ", "DJR", "DJS", "DJT", "DJU", "DJV",
  "DJW", "DJX", "DJY", "DJZ", "DKA", "DKB", "DKC", "DKD", "DKE", "DKF",
  "DKG", "DKH", "DKI", "DKJ", "DKK", "DKL", "DKM", "DKN", "DKO", "DKP",
  "DKQ", "DKR", "DKS", "DKT", "DKU", "DKV", "DKW", "DKX", "DKY", "DKZ",
  "DLA", "DLB", "DLC", "DLD", "DLE", "DLF", "DLG", "DLH", "DLI", "DLJ",
  "DLK", "DLL", "DLM", "DLN", "DLO", "DLP", "DLQ", "DLR", "DLS", "DLT",
  "DLU", "DLV", "DLW", "DLX", "DLY", "DLZ", "DMA", "DMB", "DMC", "DMD",
  "DME", "DMF", "DMG", "DMH", "DMI", "DMJ", "DMK", "DML", "DMM", "DMN",
  "DMO", "DMP", "DMQ", "DMR", "DMS", "DMT", "DMU", "DMV", "DMW", "DMX",
  "DMY", "DMZ", "DNA", "DNB", "DNC", "DND", "DNE", "DNF", "DNG", "DNH",
  "DNI", "DNJ", "DNK", "DNL", "DNM", "DNN", "DNO", "DNP", "DNQ", "DNR",
  "DNS", "DNT", "DNU", "DNV", "DNW", "DNX", "DNY", "DNZ", "DOA", "DOB",
  "DOC", "DOD", "DOE", "DOF", "DOG", "DOH", "DOI", "DOJ", "DOK", "DOL",
  "DOM", "DON", "DOO", "DOP", "DOQ", "DOR", "DOS", "DOT", "DOU", "DOV",
  "DOW", "DOX", "DOY", "DOZ", "DPA", "DPB", "DPC", "DPD", "DPE", "DPF",
  "DPG", "DPH", "DPI", "DPJ", "DPK", "DPL", "DPM", "DPN", "DPO", "DPP",
  "DPQ", "DPR", "DPS", "DPT", "DPU", "DPV", "DPW", "DPX", "DPY", "DPZ",
  "DQA", "DQB", "DQC", "DQD", "DQE", "DQF", "DQG", "DQH", "DQI", "DQJ",
  "DQK", "DQL", "DQM", "DQN", "DQo", "DQP", "DQQ", "DQR", "DQS", "DQT",
  "DQU", "DQV", "DQW", "DQX", "DQY", "DQZ", "DRA", "DRB", "DRC", "DRD",
  "DRE", "DRF", "DRG", "DRH", "DRI", "DRJ", "DRK", "DRL", "DRM", "DRN",
  "DRO", "DRP", "DRQ", "DRR", "DRS", "DRT", "DRU", "DRV", "DRW", "DRX",
  "DRY", "DRZ", "DSA", "DSB", "DSC", "DSD", "DSE", "DSF", "DSG", "DSH",
  "DSI", "DSJ", "DSK", "DSL", "DSM", "DSN", "DSO", "DSP", "DSQ", "DSR",
  "DSS", "DST", "DSU", "DSV", "DSW", "DSX", "DSY", "DSZ", "DTA", "DTB",
  "DTC", "DTD", "DTE", "DTF", "DTG", "DTH", "DTI", "DTJ", "DTK", "DTL",
  "DTM", "DTN", "DTO", "DTP", "DTQ", "DTR", "DTS", "DTT", "DTU", "DTV",
  "DTW", "DTX", "DTY", "DTZ", "DUA", "DUB", "DUC", "DUD", "DUE", "DUF",
  "DUG", "DUH", "DUI", "DUJ", "DUK", "DUL", "DUM", "DUN", "DUO", "DUP",
  "DUQ", "DUR", "DUS", "DUT", "DUU", "DUV", "DUW", "DUX", "DUY", "DUZ",
  "DVA", "DVB", "DVC", "DVD", "DVE", "DVF", "DVG", "DVH", "DVI", "DVJ",
  "DVK", "DVL", "DVM", "DVN", "DVO", "DVP", "DVQ", "DVR", "DVS", "DVT",
  "DVU", "DVV", "DVW", "DVX", "DVY", "DVZ", "DWA", "DWB", "DWC", "DWD",
  "DWE", "DWF", "DWG", "DWH", "DWI", "DWJ", "DWK", "DWL", "DWM", "DWN",
  "DWO", "DWP", "DWQ", "DWR", "DWS", "DWT", "DWU", "DWV", "DWW", "DWX",
  "DWY", "DWZ", "DXA", "DXB", "DXC", "DXD", "DXE", "DXF", "DXG", "DXH",
  "DXI", "DXJ", "DXK", "DXL", "DXM", "DXN", "DXO", "DXP", "DXQ", "DXR",
  "DXS", "DXT", "DXU", "DXV", "DXW", "DXX", "DXY", "DXZ", "DYA", "DYB",
  "DYC", "DYD", "DYE", "DYF", "DYG", "DYH", "DYI", "DYJ", "DYK", "DYL",
  "DYM", "DYN", "DYO", "DYP", "DYQ", "DYR", "DYS", "DYT", "DYU", "DYV",
  "DYW", "DYX", "DYY", "DYZ", "DZA", "DZB", "DZC", "DZD", "DZE", "DZF",
  "DZG", "DZH", "DZI", "DZJ", "DZK", "DZL", "DZM", "DZN", "DZO", "DZP",
  "DZQ", "DZR", "DZS", "DZT", "DZU", "DZV", "DZW", "DZX", "DZY", "DZZ",
  "DAE", "DAF", "DAG", "DAH", "DAI", "DAJ",
  "EAA", "EAB", "EAC", "EAD", "EAE", "EAF", "EAG", "EAH", "EAI", "EAJ",
  "EAK", "EAL", "EAM", "EAN", "EAO", "EAP", "EAQ", "EAR", "EAS", "EAT",
  "EAU", "EAV", "EAW", "EAX", "EAY", "EAZ", "EBA", "EBB", "EBC", "EBD",
  "EBE", "EBF", "EBG", "EBH", "EBI", "EBJ", "EBK", "EBL", "EBM", "EBN",
  "EBO", "EBP", "EBQ", "EBR", "EBS", "EBT", "EBU", "EBV", "EBW", "EBX",
  "EBY", "EBZ", "ECA", "ECB", "ECC", "ECD", "ECE", "ECF", "ECG", "ECH",
  "ECI", "ECJ", "ECK", "ECL", "ECM", "ECN", "ECO", "ECP", "ECQ", "ECR",
  "ECS", "ECT", "ECU", "ECV", "ECW", "ECX", "ECY", "ECZ", "EDA", "EDB",
  "EDC", "EDD", "EDE", "EDF", "EDG", "EDH", "EDI", "EDJ", "EDK", "EDL",
  "EDM", "EDN", "EDO", "EDP", "EDQ", "EDR", "EDS", "EDT", "EDU", "EDV",
  "EDW", "EDX", "EDY", "EDZ", "EEA", "EEB", "EEC", "EED", "EEE", "EEF",
  "EEG", "EEH", "EEI", "EEJ", "EEK", "EEL", "EEM", "EEN", "EEO", "EEP",
  "EEQ", "EER", "EES", "EET", "EEU", "EEV", "EEW", "EEX", "EEY", "EEZ",
  "EFA", "EFB", "EFC", "EFD", "EFE", "EFF", "EFG", "EFH", "EFI", "EFJ",
  "EFK", "EFL", "EFM", "EFN", "EFO", "EFP", "EFQ", "EFR", "EFS", "EFT",
  "EFU", "EFV", "EFW", "EFX", "EFY", "EFZ", "EGA", "EGB", "EGC", "EGD",
  "EGE", "EGF", "EGG", "EGH", "EGI", "EGJ", "EGK", "EGL", "EGM", "EGN",
  "EGO", "EGP", "EGQ", "EGR", "EGS", "EGT", "EGU", "EGV", "EGW", "EGX",
  "EGY", "EGZ", "EHA", "EHB", "EHC", "EHD", "EHE", "EHF", "EHG", "EHH",
  "EHI", "EHJ", "EHK", "EHL", "EHM", "EHN", "EHO", "EHP", "EHQ", "EHR",
  "EHS", "EHT", "EHU", "EHV", "EHW", "EHX", "EHY", "EHZ", "EIA", "EIB",
  "EIC", "EID", "EIE", "EIF", "EIG", "EIH", "EII", "EIJ", "EIK", "EIL",
  "EIM", "EIN", "EIO", "EIP", "EIQ", "EIR", "EIS", "EIT", "EIU", "EIV",
  "EIW", "EIX", "EIY", "EIZ", "EJA", "EJB", "EJC", "EJD", "EJE", "EJF",
  "EJG", "EJH", "EJI", "EJJ", "EJK", "EJL", "EJM", "EJN", "EJO", "EJP",
  "EJQ", "EJR", "EJS", "EJT", "EJU", "EJV", "EJW", "EJX", "EJY", "EJZ",
  "EKA", "EKB", "EKC", "EKD", "EKE", "EKF", "EKG", "EKH", "EKI", "EKJ",
  "EKK", "EKL", "EKM", "EKN", "EKO", "EKP", "EKQ", "EKR", "EKS", "EKT",
  "EKU", "EKV", "EKW", "EKX", "EKY", "EKZ", "ELA", "ELB", "ELC", "ELD",
  "ELE", "ELF", "ELG", "ELH", "ELI", "ELJ", "ELK", "ELL", "ELM", "ELN",
  "ELO", "ELP", "ELQ", "ELR", "ELS", "ELT", "ELU", "ELV", "ELW", "ELX",
  "ELY", "ELZ", "EMA", "EMB", "EMC", "EMD", "EME", "EMF", "EMG", "EMH",
  "EMI", "EMJ", "EMK", "EML", "EMM", "EMN", "EMO", "EMP", "EMQ", "EMR",
  "EMS", "EMT", "EMU", "EMV", "EMW", "EMX", "EMY", "EMZ", "ENA", "ENB",
  "ENC", "END", "ENE", "ENF", "ENG", "ENH", "ENI", "ENJ", "ENK", "ENL",
  "ENM", "ENN", "ENO", "ENP", "ENQ", "ENR", "ENS", "ENT", "ENU", "ENV",
  "ENW", "ENX", "ENY", "ENZ", "EOA", "EOB", "EOC", "EOD", "EOE", "EOF",
  "EOG", "EOH", "EOI", "EOJ", "EOK", "EOL", "EOM", "EON", "EOO", "EOP",
  "EOQ", "EOR", "EOS", "EOT", "EOU", "EOV", "EOW", "EOX", "EOY", "EOZ",
  "EPA", "EPB", "EPC", "EPD", "EPE", "EPF", "EPG", "EPH", "EPI", "EPJ",
  "EPK", "EPL", "EPM", "EPN", "EPO", "EPP", "EPQ", "EPR", "EPS", "EPT",
  "EPU", "EPV", "EPW", "EPX", "EPY", "EPZ", "EQA", "EQB", "EQC", "EQD",
  "EQE", "EQF", "EQG", "EQH", "EQI", "EQJ", "EQK", "EQL", "EQM", "EQN",
  "EQO", "EQP", "EQQ", "EQR", "EQS", "EQT", "EQU", "EQV", "EQW", "EQX",
  "EQY", "EQZ", "ERA", "ERB", "ERC", "ERD", "ERE", "ERF", "ERG", "ERH",
  "ERI", "ERJ", "ERK", "ERL", "ERM", "ERN", "ERO", "ERP", "ERQ", "ERR",
  "ERS", "ERT", "ERU", "ERV", "ERW", "ERX", "ERY", "ERZ", "ESA", "ESB",
  "ESC", "ESD", "ESE", "ESF", "ESG", "ESH", "ESI", "ESJ", "ESK", "ESL",
  "ESM", "ESN", "ESO", "ESP", "ESQ", "ESR", "ESS", "EST", "ESU", "ESV",
  "ESW", "ESX", "ESY", "ESZ", "ETA", "ETB", "ETC", "ETD", "ETE", "ETF",
  "ETG", "ETH", "ETI", "ETJ", "ETK", "ETL", "ETM", "ETN", "ETO", "ETP",
  "ETQ", "ETR", "ETS", "ETT", "ETU", "ETV", "ETW", "ETX", "ETY", "ETZ",
  "EUA", "EUB", "EUC", "EUD", "EUE", "EUF", "EUG", "EUH", "EUI", "EUJ",
  "EUK", "EUL", "EUM", "EUN", "EUO", "EUP", "EUQ", "EUR", "EUS", "EUT",
  "EUU", "EUV", "EUW", "EUX", "EUY", "EUZ", "EVA", "EVB", "EVC", "EVD",
  "EVE", "EVF", "EVG", "EVH", "EVI", "EVJ", "EVK", "EVL", "EVM", "EVN",
  "EVO", "EVP", "EVQ", "EVR", "EVS", "EVT", "EVU", "EVV", "EVW", "EVX",
  "EVY", "EVZ", "EWA", "EWB", "EWC", "EWD", "EWE", "EWF", "EWG", "EWH",
  "EWI", "EWJ", "EWK", "EWL", "EWM", "EWN", "EWO", "EWP", "EWQ", "EWR",
  "EWS", "EWT", "EWU", "EWV", "EWW", "EWX", "EWY", "EWZ", "EXA", "EXB",
  "EXC", "EXD", "EXE", "EXF", "EXG", "EXH", "EXI", "EXJ", "EXK", "EXL",
  "EXM", "EXN", "EXO", "EXP", "EXQ", "EXR", "EXS", "EXT", "EXU", "EXV",
  "EXW", "EXX", "EXY", "EXZ", "EYA", "EYB", "EYC", "EYD", "EYE", "EYF",
  "EYG", "EYH", "EYI", "EYJ", "EYK", "EYL", "EYM", "EYN", "EYO", "EYP",
  "EYQ", "EYR", "EYS", "EYT", "EYU", "EYV", "EYW", "EYX", "EYY", "EYZ",
  "EZA", "EZB", "EZC", "EZD", "EZE", "EZF", "EZG", "EZH", "EZI", "EZJ",
  "EZK", "EZL", "EZM", "EZN", "EZO", "EZP", "EZQ", "EZR", "EZS", "EZT",
  "EZU", "EZV", "EZW", "EZX", "EZY", "EZZ",
  "FAA", "FAB", "FAC", "FAD", "FAE", "FAF", "FAG", "FAH", "FAI", "FAJ",
  "FAK", "FAL", "FAM", "FAN", "FAO", "FAP", "FAQ", "FAR", "FAS", "FAT",
  "FAU", "FAV", "FAW", "FAX", "FAY", "FAZ", "FBA", "FBB", "FBC", "FBD",
  "FBE", "FBF", "FBG", "FBH", "FBI", "FBJ", "FBK", "FBL", "FBM", "FBN",
  "FBO", "FBP", "FBQ", "FBR", "FBS", "FBT", "FBU", "FBV", "FBW", "FBX",
  "FBY", "FBZ", "FCA", "FCB", "FCC", "FCD", "FCE", "FCF", "FCG", "FCH",
  "FCI", "FCJ", "FCK", "FCL", "FCM", "FCN", "FCO", "FCP", "FCQ", "FCR",
  "FCS", "FCT", "FCU", "FCV", "FCW", "FCX", "FCY", "FCZ", "FDA", "FDB",
  "FDC", "FDD", "FDE", "FDF", "FDG", "FDH", "FDI", "FDJ", "FDK", "FDL",
  "FDM", "FDN", "FDO", "FDP", "FDQ", "FDR", "FDS", "FDT", "FDU", "FDV",
  "FDW", "FDX", "FDY", "FDZ", "FEA", "FEB", "FEC", "FED", "FEE", "FEF",
  "FEG", "FEH", "FEI", "FEJ", "FEK", "FEL", "FEM", "FEN", "FEO", "FEP",
  "FEQ", "FER", "FES", "FET", "FEU", "FEV", "FEW", "FEX", "FEY", "FEZ",
  "FFA", "FFB", "FFC", "FFD", "FFE", "FFF", "FFG", "FFH", "FFI", "FFJ",
  "FFK", "FFL", "FFM", "FFN", "FFO", "FFP", "FFQ", "FFR", "FFS", "FFT",
  "FFU", "FFV", "FFW", "FFX", "FFY", "FFZ", "FGA", "FGB", "FGC", "FGD",
  "FGE", "FGF", "FGG", "FGH", "FGI", "FGJ", "FGK", "FGL", "FGM", "FGN",
  "FGO", "FGP", "FGQ", "FGR", "FGS", "FGT", "FGU", "FGV", "FGW", "FGX",
  "FGY", "FGZ", "FHA", "FHB", "FHC", "FHD", "FHE", "FHF", "FHG", "FHH",
  "FHI", "FHJ", "FHK", "FHL", "FHM", "FHN", "FHO", "FHP", "FHQ", "FHR",
  "FHS", "FHT", "FHU", "FHV", "FHW", "FHX", "FHY", "FHZ", "FIA", "FIB",
  "FIC", "FID", "FIE", "FIF", "FIG", "FIH", "FII", "FIJ", "FIK", "FIL",
  "FIM", "FIN", "FIO", "FIP", "FIQ", "FIR", "FIS", "FIT", "FIU", "FIV",
  "FIW", "FIX", "FIY", "FIZ", "FJA", "FJB", "FJC", "FJD", "FJE", "FJF",
  "FJG", "FJH", "FJI", "FJJ", "FJK", "FJL", "FJM", "FJN", "FJO", "FJP",
  "FJQ", "FJR", "FJS", "FJT", "FJU", "FJV", "FJW", "FJX", "FJY", "FJZ",
  "FKA", "FKB", "FKC", "FKD", "FKE", "FKF", "FKG", "FKH", "FKI", "FKJ",
  "FKK", "FKL", "FKM", "FKN", "FKO", "FKP", "FKQ", "FKR", "FKS", "FKT",
  "FKU", "FKV", "FKW", "FKX", "FKY", "FKZ", "FLA", "FLB", "FLC", "FLD",
  "FLE", "FLF", "FLG", "FLH", "FLI", "FLJ", "FLK", "FLL", "FLM", "FLN",
  "FLO", "FLP", "FLQ", "FLR", "FLS", "FLT", "FLU", "FLV", "FLW", "FLX",
  "FLY", "FLZ", "FMA", "FMB", "FMC", "FMD", "FME", "FMF", "FMG", "FMH",
  "FMI", "FMJ", "FMK", "FML", "FMM", "FMN", "FMO", "FMP", "FMQ", "FMR",
  "FMS", "FMT", "FMU", "FMV", "FMW", "FMX", "FMY", "FMZ", "FNA", "FNB",
  "FNC", "FND", "FNE", "FNF", "FNG", "FNH", "FNI", "FNJ", "FNK", "FNL",
  "FNM", "FNN", "FNO", "FNP", "FNQ", "FNR", "FNS", "FNT", "FNU", "FNV",
  "FNW", "FNX", "FNY", "FNZ", "FOA", "FOB", "FOC", "FOD", "FOE", "FOF",
  "FOG", "FOH", "FOI", "FOJ", "FOK", "FOL", "FOM", "FON", "FOO", "FOP",
  "FOQ", "FOR", "FOS", "FOT", "FOU", "FOV", "FOW", "FOX", "FOY", "FOZ",
  "FPA", "FPB", "FPC", "FPD", "FPE", "FPF", "FPG", "FPH", "FPI", "FPJ",
  "FPK", "FPL", "FPM", "FPN", "FPO", "FPP", "FPQ", "FPR", "FPS", "FPT",
  "FPU", "FPV", "FPW", "FPX", "FPY", "FPZ", "FQA", "FQB", "FQC", "FQD",
  "FQE", "FQF", "FQG", "FQH", "FQI", "FQJ", "FQK", "FQL", "FQM", "FQN",
  "FQO", "FQP", "FQQ", "FQR", "FQS", "FQT", "FQU", "FQV", "FQW", "FQX",
  "FQY", "FQZ", "FRA", "FRB", "FRC", "FRD", "FRE", "FRF", "FRG", "FRH",
  "FRI", "FRJ", "FRK", "FRL", "FRM", "FRN", "FRO", "FRP", "FRQ", "FRR",
  "FRS", "FRT", "FRU", "FRV", "FRW", "FRX", "FRY", "FRZ", "FSA", "FSB",
  "FSC", "FSD", "FSE", "FSF", "FSG", "FSH", "FSI", "FSJ", "FSK", "FSL",
  "FSM", "FSN", "FSO", "FSP", "FSQ", "FSR", "FSS", "FST", "FSU", "FSV",
  "FSW", "FSX", "FSY", "FSZ", "FTA", "FTB", "FTC", "FTD", "FTE", "FTF",
  "FTG", "FTH", "FTI", "FTJ", "FTK", "FTL", "FTM", "FTN", "FTO", "FTP",
  "FTQ", "FTR", "FTS", "FTT", "FTU", "FTV", "FTW", "FTX", "FTY", "FTZ",
  "FUA", "FUB", "FUC", "FUD", "FUE", "FUF", "FUG", "FUH", "FUI", "FUJ",
  "FUK", "FUL", "FUM", "FUN", "FUO", "FUP", "FUQ", "FUR", "FUS", "FUT",
  "FUU", "FUV", "FUW", "FUX", "FUY", "FUZ", "FVA", "FVB", "FVC", "FVD",
  "FVE", "FVF", "FVG", "FVH", "FVI", "FVJ", "FVK", "FVL", "FVM", "FVN",
  "FVO", "FVP", "FVQ", "FVR", "FVS", "FVT", "FVU", "FVV", "FVW", "FVX",
  "FVY", "FVZ", "FWA", "FWB", "FWC", "FWD", "FWE", "FWF", "FWG", "FWH",
  "FWI", "FWJ", "FWK", "FWL", "FWM", "FWN", "FWO", "FWP", "FWQ", "FWR",
  "FWS", "FWT", "FWU", "FWV", "FWW", "FWX", "FWY", "FWZ", "FXA", "FXB",
  "FXC", "FXD", "FXE", "FXF", "FXG", "FXH", "FXI", "FXJ", "FXK", "FXL",
  "FXM", "FXN", "FXO", "FXP", "FXQ", "FXR", "FXS", "FXT", "FXU", "FXV",
  "FXW", "FXX", "FXY", "FXZ", "FYA", "FYB", "FYC", "FYD", "FYE", "FYF",
  "FYG", "FYH", "FYI", "FYJ", "FYK", "FYL", "FYM", "FYN", "FYO", "FYP",
  "FYQ", "FYR", "FYS", "FYT", "FYU", "FYV", "FYW", "FYX", "FYY", "FYZ",
  "FZA", "FZB", "FZC", "FZD", "FZE", "FZF", "FZG", "FZH", "FZI", "FZJ",
  "FZK", "FZL", "FZM", "FZN", "FZO", "FZP", "FZQ", "FZR", "FZS", "FZT",
  "FZU", "FZV", "FZW", "FZX", "FZY", "FZZ", "GAA", "GAB", "GAC", "GAD",
  "GAK", "GAL", "GAM", "GAN", "GAO", "GAP", "GAQ", "GAR", "GAS", "GAT",
  "GAU", "GAV", "GAW", "GAX", "GAY", "GAZ", "GBA", "GBB", "GBC", "GBD",
  "GBE", "GBF", "GBG", "GBH", "GBI", "GBJ", "GBK", "GBL", "GBM", "GBN",
  "GBO", "GBP", "GBQ", "GBR", "GBS", "GBT", "GBU", "GBV", "GBW", "GBX",
  "GBY", "GBZ", "GCA", "GCB", "GCC", "GCD", "GCE", "GCF", "GCG", "GCH",
  "GCI", "GCJ", "GCK", "GCL", "GCM", "GCN", "GCO", "GCP", "GCQ", "GCR",
  "GCS", "GCT", "GCU", "GCV", "GCW", "GCX", "GCY", "GCZ", "GDA", "GDB",
  "GDC", "GDD", "GDE", "GDF", "GDG", "GDH", "GDI", "GDJ", "GDK", "GDL",
  "GDM", "GDN", "GDO", "GDP", "GDQ", "GDR", "GDS", "GDT", "GDU", "GDV",
  "GDW", "GDX", "GDY", "GDZ", "GEA", "GEB", "GEC", "GED", "GEE", "GEF",
  "GEG", "GEH", "GEI", "GEJ", "GEK", "GEL", "GEM", "GEN", "GEO", "GEP",
  "GEQ", "GER", "GES", "GET", "GEU", "GEV", "GEW", "GEX", "GEY", "GEZ",
  "GFA", "GFB", "GFC", "GFD", "GFE", "GFF", "GFG", "GFH", "GFI", "GFJ",
  "GFK", "GFL", "GFM", "GFN", "GFO", "GFP", "GFQ", "GFR", "GFS", "GFT",
  "GFU", "GFV", "GFW", "GFX", "GFY", "GFZ", "GGA", "GGB", "GGC", "GGD",
  "GGE", "GGF", "GGG", "GGH", "GGI", "GGJ", "GGK", "GGL", "GGM", "GGN",
  "GGO", "GGP", "GGQ", "GGR", "GGS", "GGT", "GGU", "GGV", "GGW", "GGX",
  "GGY", "GGZ", "GHA", "GHB", "GHC", "GHD", "GHE", "GHF", "GHG", "GHH",
  "GHI", "GHJ", "GHK", "GHL", "GHM", "GHN", "GHO", "GHP", "GHQ", "GHR",
  "GHS", "GHT", "GHU", "GHV", "GHW", "GHX", "GHY", "GHZ", "GIA", "GIB",
  "GIC", "GID", "GIE", "GIF", "GIG", "GIH", "GII", "GIJ", "GIK", "GIL",
  "GIM", "GIN", "GIO", "GIP", "GIQ", "GIR", "GIS", "GIT", "GIU", "GIV",
  "GIW", "GIX", "GIY", "GIZ", "GJA", "GJB", "GJC", "GJD", "GJE", "GJF",
  "GJG", "GJH", "GJI", "GJJ", "GJK", "GJL", "GJM", "GJN", "GJO", "GJP",
  "GJQ", "GJR", "GJS", "GJT", "GJU", "GJV", "GJW", "GJX", "GJY", "GJZ",
  "GAE", "GAF", "GAG", "GAH", "GAI", "GAJ", "GKA", "GKB", "GKC", "GKD",
  "GKE", "GKF", "GKG", "GKH", "GKI", "QSN", "QSO", "QSP", "QSQ", "QSR",
  "QSS", "QST", "QSU", "QSV", "QSW", "QSX", "QSY", "QSZ"




]



function handleClick(event){
    event.preventDefault()
    const valorDoInput = document.getElementById("event-title")
    const teste = valorDoInput.value
    if(ES.includes(teste)){
        alert("ES")
    }else if(RJ.includes(teste)){
        alert("RJ")
    }else if(SP.includes(teste)){
        alert("SP")
    }else {
        alert("Não pertence a um desses três estados.")
    }

}
document.getElementById("button").addEventListener("click", handleClick);






/*
const teste = prompt("Digite as 3 primeiras letras dapaca")

if(ES.includes(teste)){
    alert("ES")
}
    */