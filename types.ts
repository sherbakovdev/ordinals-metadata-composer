export type Attribute = {
  value: string;
  trait_type: string;
};

export type Inscription = {
  id: string;
  meta: {
    name: string;
  };
  attributes: Attribute[];
};

export type State = {
  meta: {
    name: string;
    slug: string;
    supply: string;
    description: string;
    twitter_link: string;
    discord_link: string;
    website_link: string;
    inscription_icon: string;
  };
  inscriptions: Array<Inscription>;
};
