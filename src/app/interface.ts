export interface Weapon {
    id: number;
    name: string;
    type: string;
    rarity: number;
    attack: {
      display: number;
      raw: number;
    };
    attributes: {
      affinity: number;
      defense: number;
      element?: string;
    };
    slots: Array<{
      rank: number;
    }>;
    crafting: {
      materials: Array<{
        item: {
          id: number;
          name: string;
        };
        quantity: number;
      }>;
    };
  }

  export interface Armor {
    id: number;
    name: string;
    rank: string;
    rarity: number;
    pieces: Array<{
      id: number;
      name: string;
      type: string;
      rank: string;
      rarity: number;
      defense: {
        base: number;
        max: number;
        augmented: number;
      };
      slots: Array<{
        rank: number;
      }>;
      skills: Array<{
        id: number;
        level: number;
      }>;
    }>;
  }

  export interface Charm {
    id: number;
    name: string;
    rank: string;
    level: number;
    skills: Array<{
      id: number;
      level: number;
    }>;
  }
  
  