import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Subject } from '../models/class.model';

@Injectable()
export class ClassesViewService {
  subject: any[] = [
    {
      code: 'AAA',
      name: 'AAA - Academic Access',
    },
    {
      code: 'ABRAD',
      name: 'ABRAD - Study Abroad',
    },
    {
      code: 'ACC',
      name: 'ACC - Accountancy',
    },
    {
      code: 'ADVST',
      name: 'ADVST - Advanced Standing Prog',
    },
    {
      code: 'AFR',
      name: 'AFR - Afro-American Studies',
    },
    {
      code: 'ANTH',
      name: 'ANTH - Anthropology ',
    },
    {
      code: 'ARB',
      name: 'ARB - Arabic ',
    },
    {
      code: 'ARCH',
      name: 'ARCH - Architectural Tech ',
    },
    {
      code: 'ARTH',
      name: 'ARTH - Art History ',
    },
    {
      code: 'ASL',
      name: 'ASL - American Sign Language',
    },
    {
      code: 'BEOC',
      name: 'BEOC - Stdnt Referred to BEOC',
    },
    {
      code: 'BIO',
      name: 'BIO - Biological Sciences ',
    },
    {
      code: 'BLOCK',
      name: 'Block Program - Learning Comty',
    },
    {
      code: 'BSKLC',
      name: ' BSKLC - SEEK Biology Seminar ',
    },
    {
      code: 'BUF',
      name: 'BUF - Business Merchandising ',
    },
    {
      code: 'BUS',
      name: 'BUS - Business ',
    },
    {
      code: 'CDMG',
      name: 'CDMG - Comm Design Mgmt',
    },
    {
      code: 'CERT',
      name: 'CERT - Certified Full Time',
    },
    {
      code: 'CET',
      name: 'CET - Comp Engineering Tech',
    },
    {
      code: 'CF',
      name: 'CF - Certified Full Time ',
    },
    {
      code: 'CHEM',
      name: 'CHEM - Chemistry ',
    },
    {
      code: 'CHN',
      name: 'CHN - Chinese',
    },
    {
      code: 'CMCE',
      name: 'CMCE - Construction Tech',
    },
    {
      code: 'COLNW',
      name: 'COLNW - COLNW ',
    },
    {
      code: 'COMD',
      name: 'COMD - Communication Design',
    },
    {
      code: 'COMPX',
      name: 'COMPX - Computer Literacy Exam',
    },
    {
      code: 'CSKLC',
      name: 'CSKLC - SEEK Learn Comm Coach ',
    },
    {
      code: 'CST',
      name: 'CST - Computer Information Sys ',
    },
    {
      code: 'CUNBA',
      name: 'CUNBA - CUNY BA ',
    },
    {
      code: 'DEN',
      name: 'DEN - Dental Hygiene',
    },
    {
      code: 'DPT',
      name: 'DPT - Data Processing',
    },
    {
      code: 'ECON',
      name: 'ECON - Economics',
    },
    {
      code: 'EDU',
      name: 'EDU - Teacher Education',
    },
    {
      code: 'EET',
      name: ' EET - Electrical Eng Tech',
    },
    {
      code: 'ELEC',
      name: 'ELEC - Elective Credit',
    },
    {
      code: 'EMT',
      name: 'EMT - Electro-Mech Eng Tech',
    },
    {
      code: 'ENG',
      name: 'ENG - English',
    },
    {
      code: 'ENGR',
      name: 'ENGR - Intro to Eng & Computer',
    },
    {
      code: 'ENT',
      name: 'ENT - Entertainment Technology',
    },
    {
      code: 'ENVC',
      name: 'ENVC - Environ Control Tech',
    },
    {
      code: 'ESCI',
      name: 'ESCI - Environmental Science',
    },
    {
      code: 'ESOL',
      name: 'ESOL - Col Eng as a Second',
    },
    {
      code: 'ETN',
      name: 'ETN - Elect Eng Tech-Non-Major',
    },
    {
      code: 'ETX',
      name: 'ETX - Elect Eng Tech-Next Step',
    },
    {
      code: 'FMGT',
      name: 'FMGT - Facilities Management',
    },
    {
      code: 'FREN',
      name: 'FREN - French',
    },
    {
      code: 'GEOG',
      name: 'GEOG - Geography',
    },

    {
      code: 'GOV',
      name: 'GOV - Government',
    },
    {
      code: 'GRA',
      name: 'GOV - Government',
    },
    {
      code: 'GRA',
      name: 'GRA - Graphic Arts & Adv Tech ',
    },
    {
      code: 'HEA',
      name: 'HEA - Health Education',
    },
    {
      code: 'HIS',
      name: 'HIS - History',
    },
    {
      code: 'HMGT',
      name: 'HMGT - Hospitality Management',
    },
    {
      code: 'HSA',
      name: 'HSA - Health services Admin',
    },
    {
      code: 'HSCI',
      name: 'HSCI - Health Science',
    },
    {
      code: 'HUS',
      name: 'HUS - Human Services',
    },
    {
      code: 'IMT',
      name: 'IMT - Interactive Media Tech',
    },
    {
      code: 'IND',
      name: 'IND - Industrial Design Tech',
    },
    {
      code: 'IS',
      name: ' IS - Independent Study',
    },
    {
      code: 'LATS',
      name: 'LATS - Latin American Studies',
    },
    {
      code: 'LAW',
      name: 'LAW - Law & Paralegal Studies',
    },
    {
      code: 'LIB',
      name: 'LIB - LIB',
    },
    {
      code: 'LING',
      name: 'LING - Linguistics',
    },
    {
      code: 'LNG',
      name: 'LNG - Lang, Culture, Society',
    },
    {
      code: 'LOA',
      name: 'LOA - Leave of Absence',
    },
    {
      code: 'MAT',
      name: 'MAT - Mathematics',
    },
    {
      code: 'MECH',
      name: 'MECH - Mechanical Eng Tech',
    },
    {
      code: 'MED',
      name: 'MED - Biomedical Informatics',
    },
    {
      code: 'MEDU',
      name: 'MEDU - Mathematics Education',
    },
    {
      code: 'MKT',
      name: 'MKT - Marketing',
    },
    {
      code: 'MM',
      name: 'MM - Maint of Matric',
    },
    {
      code: 'MSKLC',
      name: 'MSKLC - SEEK Math Seminar',
    },
    {
      code: 'MST',
      name: 'MST - Micro Computer Sys Tech',
    },
    {
      code: 'MTEC',
      name: ' MTEC - Emerging Media Tech',
    },
    {
      code: 'MUS',
      name: 'MUS - Music',
    },
    {
      code: 'NUR',
      name: 'NUR - Nursing',
    },
    {
      code: 'ONFIL',
      name: ' ONFIL - On File Used for CLIP',
    },
    {
      code: 'PERF',
      name: 'PERF - Performing Arts',
    },
    {
      code: 'PERM',
      name: 'PERM - Permit Course',
    },
    {
      code: 'PERMX',
      name: 'PERMX - Permit Course',
    },
    {
      code: 'PHIL',
      name: 'PHIL - Philosophy',
    },
    {
      code: 'PHYS',
      name: 'PHYS - Physics & General Sci',
    },
    {
      code: 'PO',
      name: ' PO - Permit Out',
    },
    {
      code: 'PRS',
      name: 'PRS - Latin American Studies',
    },
    {
      code: 'PSY',
      name: 'PSY - Psychology',
    },
    {
      code: 'RAD',
      name: 'RAD - Radiologic Med Imag Tech',
    },
    {
      code: 'RESD',
      name: 'RESD - Dental Laboratory Tech',
    },
    {
      code: 'SBS',
      name: 'SBS - Social & Behavioral Sci',
    },
    {
      code: 'SCI',
      name: 'SCI - Intro to Math & Science',
    },
    {
      code: 'SEEKX',
      name: 'SEEKX - SEEK Edu Experience',
    },
    {
      code: 'SEKAC',
      name: 'SEKAC - SEEK Academy',
    },
    {
      code: 'SOC',
      name: 'SOC - Sociology',
    },
    {
      code: 'SPA',
      name: 'SPA - Spanish',
    },
    {
      code: 'STABD',
      name: 'STABD - Study Abroad',
    },
    {
      code: 'STS',
      name: 'STS - Sci, Tech & Society',
    },
    {
      code: 'SUPT',
      name: 'SUPT - Build Super Tech',
    },
    {
      code: 'TCET',
      name: 'TCET - Telecommunications',
    },
    {
      code: 'THE',
      name: 'THE - Theatre',
    },
    {
      code: 'TSKLC',
      name: 'TSKLC - SEEK Learn Comm Tut',
    },
    {
      code: 'TUTOR',
      name: 'TUTOR - USIP Tutorial',
    },
    {
      code: 'VCT',
      name: 'VCT - Ophthalmic Dispensing',
    },
    {
      code: 'WKSHP',
      name: 'WKSHP - Educational Workshop',
    },
  ]; //end of subject

  classes: Class[];
  constructor() {}

  returnClasses() {
    this.classes = [
      {
        class: 26578,
        section: 'OL-25',
        code: 'CST1201',
        name: 'Programming Fundatmentals',
        oncePerWeek: true,
        dayOne: 'Saturday',
        dayOneTimeStart: '12:30pm',
        dayOneTimeFinish: '4:05pm',
        dayTwo: null,
        dayTwoTimeStart: null,
        dayTwoTimeFinish: null,
      },
    ];

    // getCarsSmall() {
    //   return this.http
    //     .get<any>('assets/cars-small.json')
    //     .toPromise()
    //     .then((res) => <Car[]>res.data)
    //     .then((data) => {
    //       return data;
    //     });
    // }

    return this.classes;
  }
}
