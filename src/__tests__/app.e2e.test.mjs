/*
    Probably useless but I'm scared of the "it works on my machine" problem
 */

import { runner } from 'clet';

const EXEMPLE_1 = `[
  {
    name: 'Uzuzozne',
    people: [
      { name: 'Lillie Abbott', animals: [ { name: 'John Dory' } ] }
    ]
  },
  {
    name: 'Satanwi',
    people: [
      { name: 'Anthony Bruno', animals: [ { name: 'Oryx' } ] }
    ]
  }
]`;

const EXEMPLE_2 = `[
  {
    name: 'Dillauti [5]',
    people: [
      {
        name: 'Winifred Graham [6]',
        animals: [
          { name: 'Anoa' },
          { name: 'Duck' },
          { name: 'Narwhal' },
          { name: 'Badger' },
          { name: 'Cobra' },
          { name: 'Crow' }
        ]
      },
      {
        name: 'Blanche Viciani [8]',
        animals: [
          { name: 'Barbet' },
          { name: 'Rhea' },
          { name: 'Snakes' },
          { name: 'Antelope' },
          { name: 'Echidna' },
          { name: 'Crow' },
          { name: 'Guinea Fowl' },
          { name: 'Deer Mouse' }
        ]
      },
      {
        name: 'Philip Murray [7]',
        animals: [
          { name: 'Sand Dollar' },
          { name: 'Buzzard' },
          { name: 'Elephant' },
          { name: 'Xenops' },
          { name: 'Dormouse' },
          { name: 'Anchovy' },
          { name: 'Dinosaur' }
        ]
      },
      {
        name: 'Bobby Ristori [9]',
        animals: [
          { name: 'Kowari' },
          { name: 'Caecilian' },
          { name: 'Common Genet' },
          { name: 'Chipmunk' },
          { name: 'Aardwolf' },
          { name: "Przewalski's Horse" },
          { name: 'Badger' },
          { name: 'Sand Cat' },
          { name: "Linne's Two-toed Sloth" }
        ]
      },
      {
        name: 'Louise Pinzauti [5]',
        animals: [
          { name: 'Manta Ray' },
          { name: 'Nubian Ibex' },
          { name: 'Warbler' },
          { name: 'Duck' },
          { name: 'Mice' }
        ]
      }
    ]
  },
  {
    name: 'Tohabdal [8]',
    people: [
      {
        name: 'Effie Houghton [7]',
        animals: [
          { name: 'Zebra' },
          { name: 'Ring-tailed Lemur' },
          { name: 'Fly' },
          { name: 'Blue Iguana' },
          { name: 'Emu' },
          { name: 'African Wild Ass' },
          { name: 'Numbat' }
        ]
      },
      {
        name: 'Essie Bennett [7]',
        animals: [
          { name: 'Aldabra Tortoise' },
          { name: 'Patagonian Toothfish' },
          { name: 'Giant Panda' },
          { name: 'Goat' },
          { name: 'Quahog' },
          { name: 'Collared Lemur' },
          { name: 'Aldabra Tortoise' }
        ]
      },
      {
        name: 'Owen Bongini [5]',
        animals: [
          { name: 'Zebrashark' },
          { name: 'Dogs' },
          { name: 'Mouse' },
          { name: 'Numbat' },
          { name: 'African Wild Dog' }
        ]
      },
      {
        name: 'Alexander Fleury [7]',
        animals: [
          { name: 'Gelada' },
          { name: 'Rattlesnake' },
          { name: 'Rabbit' },
          { name: 'Aardvark' },
          { name: 'Duck' },
          { name: 'Courser' },
          { name: 'Woodpecker' }
        ]
      },
      {
        name: 'Curtis Fuchs [6]',
        animals: [
          { name: 'Squirrel' },
          { name: 'Falcon' },
          { name: 'Cat' },
          { name: 'Lobe Coral' },
          { name: 'Camel' },
          { name: 'Broadclub Cuttlefish' }
        ]
      },
      {
        name: 'Maud Lorenzo [7]',
        animals: [
          { name: 'Bush Dog' },
          { name: 'Sea Urchin' },
          { name: 'Gayal' },
          { name: 'Tortoise' },
          { name: 'Meerkat' },
          { name: 'Lion' },
          { name: 'Gecko' }
        ]
      },
      {
        name: 'Linnie Lamb [7]',
        animals: [
          { name: 'Burro' },
          { name: 'African Wild Dog' },
          { name: 'Slender Snipe Eel' },
          { name: 'Red Panda' },
          { name: 'Baby Doll Sheep' },
          { name: 'California Sea Lion' },
          { name: 'Rabbits' }
        ]
      },
      {
        name: 'Randall Benoît [5]',
        animals: [
          { name: 'Chameleons' },
          { name: 'Bee-eater' },
          { name: 'King Vulture' },
          { name: 'Giant Isopod' },
          { name: 'Sand Cat' }
        ]
      }
    ]
  },
  {
    name: 'Uzuzozne [7]',
    people: [
      {
        name: 'Harold Patton [8]',
        animals: [
          { name: 'Bearded Dragon' },
          { name: 'Chicken' },
          { name: 'Sand Cat' },
          { name: 'Hedgehog' },
          { name: 'Collared Lemur' },
          { name: 'Frogmouth' },
          { name: 'Raccoon dog' },
          { name: 'Shortfin Mako Shark' }
        ]
      },
      {
        name: 'Millie Lapini [8]',
        animals: [
          { name: 'Bearded Dragon' },
          { name: 'Peafowl' },
          { name: 'Aardvark' },
          { name: 'Cows' },
          { name: 'Crane Fly' },
          { name: 'Rock Hyrax' },
          { name: 'Gerbils' },
          { name: 'Brown Bear' }
        ]
      },
      {
        name: 'Lillian Calamandrei [8]',
        animals: [
          { name: 'Rats' },
          { name: 'Macaw' },
          { name: 'Gazelle' },
          { name: 'Gazelle' },
          { name: 'Alpaca' },
          { name: 'Snakes' },
          { name: 'Yellowjacket' },
          { name: 'Stickleback' }
        ]
      },
      {
        name: 'Lina Allen [7]',
        animals: [
          { name: 'Rabbit' },
          { name: 'Cats' },
          { name: 'Jaguarundi' },
          { name: 'Duck' },
          { name: 'Caribbean Flamingo' },
          { name: 'Oyster' },
          { name: 'Agouti' }
        ]
      },
      {
        name: 'Georgia Hooper [8]',
        animals: [
          { name: 'Grasshopper' },
          { name: 'Polar Bear' },
          { name: 'Rabbit' },
          { name: 'Loggerhead Turtle' },
          { name: 'Rhinoceros' },
          { name: 'African Wild Dog' },
          { name: 'Jackal' },
          { name: 'Zebu' }
        ]
      },
      {
        name: 'Lillie Abbott [6]',
        animals: [
          { name: 'John Dory' },
          { name: 'Gayal' },
          { name: 'Hawk' },
          { name: 'Umbrella Squid' },
          { name: 'Hyrax' },
          { name: "Henkel's Leaf-tailed Gecko" }
        ]
      },
      {
        name: 'Philip Davis [8]',
        animals: [
          { name: 'Mini Donkey' },
          { name: 'Flatback Turtle' },
          { name: 'Rabbit' },
          { name: 'Zebra' },
          { name: 'Rhea' },
          { name: 'Leafy Seadragon' },
          { name: 'Bat' },
          { name: 'Caterpillar' }
        ]
      }
    ]
  },
  {
    name: 'Zuhackog [7]',
    people: [
      {
        name: 'Elva Baroni [6]',
        animals: [
          { name: 'Silkworm' },
          { name: 'Zebu' },
          { name: 'King Vulture' },
          { name: 'Zebrashark' },
          { name: 'Ostrich' },
          { name: 'Waxwing' }
        ]
      },
      {
        name: 'Johnny Graziani [7]',
        animals: [
          { name: 'Dunnart' },
          { name: 'Cotinga' },
          { name: 'Carp' },
          { name: 'Bat' },
          { name: 'Olive Sea Snake' },
          { name: 'Caterpillar' },
          { name: 'Jackal' }
        ]
      },
      {
        name: 'Herman Christensen [7]',
        animals: [
          { name: 'Death Adder' },
          { name: 'Pronghorn' },
          { name: 'Carp' },
          { name: 'Jaguar' },
          { name: 'Anteater' },
          { name: 'Zebu' },
          { name: 'Red Ruffed Lemur' }
        ]
      },
      {
        name: 'Fannie Ancillotti [8]',
        animals: [
          { name: 'Silkworm' },
          { name: 'Horses' },
          { name: 'Anaconda' },
          { name: 'Guinea' },
          { name: 'Bird' },
          { name: 'Aardwolf' },
          { name: 'Crane Fly' },
          { name: 'Caterpillar' }
        ]
      },
      {
        name: 'Lawrence Camiciottoli [9]',
        animals: [
          { name: 'Bustard' },
          { name: 'Numbat' },
          { name: 'Cat' },
          { name: 'Gecko' },
          { name: 'Northern Red Snapper' },
          { name: 'Monkfish' },
          { name: 'Birds' },
          { name: 'Caterpillar' },
          { name: 'Mule' }
        ]
      },
      {
        name: 'Marion Landi [6]',
        animals: [
          { name: 'Tortoise' },
          { name: 'Mule' },
          { name: 'Hedgehog' },
          { name: 'Geckos' },
          { name: 'Sheep' },
          { name: 'Emu' }
        ]
      },
      {
        name: 'Lou de Bruin [5]',
        animals: [
          { name: 'Boa' },
          { name: 'Death Adder' },
          { name: 'Okapi' },
          { name: 'Fly' },
          { name: 'Horses' }
        ]
      }
    ]
  },
  {
    name: 'Satanwi [5]',
    people: [
      {
        name: 'Elmer Kinoshita [7]',
        animals: [
          { name: 'Weasel' },
          { name: 'Birds' },
          { name: 'Snakes' },
          { name: 'Anteater' },
          { name: 'Groundhog' },
          { name: 'Ant' },
          { name: 'Courser' }
        ]
      },
      {
        name: 'Cora Howell [7]',
        animals: [
          { name: 'Rhea' },
          { name: 'Sponge' },
          { name: 'Cat' },
          { name: 'African Wild Dog' },
          { name: 'Snakes' },
          { name: 'Starling' },
          { name: 'Pronghorn' }
        ]
      },
      {
        name: 'Ernest Conte [5]',
        animals: [
          { name: 'Bird' },
          { name: 'Colugo' },
          { name: 'Grison' },
          { name: 'Pot Bellied Pig' },
          { name: 'Asian Elephant' }
        ]
      },
      {
        name: 'Dennis Franci [9]',
        animals: [
          { name: 'Grouse' },
          { name: 'Hapuka' },
          { name: 'Cheetah' },
          { name: 'Donkey' },
          { name: 'Turkey' },
          { name: 'Carp' },
          { name: 'Octopus' },
          { name: 'Silkworm' },
          { name: 'Bearded Dragon' }
        ]
      },
      {
        name: 'Anthony Bruno [6]',
        animals: [
          { name: 'Caracal' },
          { name: 'Anteater' },
          { name: 'Kiwa Hirsuta' },
          { name: 'Zooplankton' },
          { name: 'Tarantula' },
          { name: 'Oryx' }
        ]
      }
    ]
  }
]`;

// run `node src/app.js --filter=an --count`.
const BOTH_AT_ONCE = `[
  {
    name: 'Dillauti [3]',
    people: [
      {
        name: 'Philip Murray [2]',
        animals: [ { name: 'Sand Dollar' }, { name: 'Elephant' } ]
      },
      {
        name: 'Bobby Ristori [2]',
        animals: [ { name: 'Caecilian' }, { name: 'Sand Cat' } ]
      },
      {
        name: 'Louise Pinzauti [2]',
        animals: [ { name: 'Manta Ray' }, { name: 'Nubian Ibex' } ]
      }
    ]
  },
  {
    name: 'Tohabdal [5]',
    people: [
      {
        name: 'Effie Houghton [2]',
        animals: [ { name: 'Blue Iguana' }, { name: 'African Wild Ass' } ]
      },
      {
        name: 'Essie Bennett [2]',
        animals: [ { name: 'Patagonian Toothfish' }, { name: 'Giant Panda' } ]
      },
      {
        name: 'Owen Bongini [1]',
        animals: [ { name: 'African Wild Dog' } ]
      },
      {
        name: 'Linnie Lamb [2]',
        animals: [ { name: 'African Wild Dog' }, { name: 'Red Panda' } ]
      },
      {
        name: 'Randall Benoît [2]',
        animals: [ { name: 'Giant Isopod' }, { name: 'Sand Cat' } ]
      }
    ]
  },
  {
    name: 'Uzuzozne [4]',
    people: [
      { name: 'Harold Patton [1]', animals: [ { name: 'Sand Cat' } ] },
      { name: 'Millie Lapini [1]', animals: [ { name: 'Crane Fly' } ] },
      {
        name: 'Lina Allen [1]',
        animals: [ { name: 'Caribbean Flamingo' } ]
      },
      {
        name: 'Georgia Hooper [1]',
        animals: [ { name: 'African Wild Dog' } ]
      }
    ]
  },
  {
    name: 'Zuhackog [1]',
    people: [
      {
        name: 'Fannie Ancillotti [1]',
        animals: [ { name: 'Crane Fly' } ]
      }
    ]
  },
  {
    name: 'Satanwi [3]',
    people: [
      {
        name: 'Cora Howell [1]',
        animals: [ { name: 'African Wild Dog' } ]
      },
      {
        name: 'Ernest Conte [1]',
        animals: [ { name: 'Asian Elephant' } ]
      },
      {
        name: 'Anthony Bruno [2]',
        animals: [ { name: 'Zooplankton' }, { name: 'Tarantula' } ]
      }
    ]
  }
]`;

describe('E2E', () => {
    it('should pass exemple 1', async () => {
        await runner().spawn('node src/app.js --filter=ry').stdout(EXEMPLE_1);
    });

    it('should pass exemple 2', async () => {
        await runner().spawn('node src/app.js --count').stdout(EXEMPLE_2);
    });

    it('should pass both at once', async () => {
        await runner().spawn('node src/app.js --filter=an --count').stdout(BOTH_AT_ONCE);
    });
});
