export interface Interest {
  id?: number;
  interest?: string;
  createdWhen?: string;
  lastAmendedWhen?: string;
  deletedWhen?: string | null;
  isCorrection?: boolean;
  childInterests?: Interest[];
}

export interface Category {
  id?: number;
  name?: string;
  sortOrder?: number;
  interests?: Interest[];
}

export interface Link {
  rel?: string;
  href?: string;
  method?: string;
}

export interface MemberInterest {
  value?: Category[];
  links?: Link[];
}
