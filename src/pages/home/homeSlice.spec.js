import reducer, {
  setSearch,
  setFilters,
  clearFilters,
  getPhotos,
} from "./homeSlice";

describe("home slice", () => {
  const initialState = {
    page: 1,
    totalPages: 0,
    per_page: 30,
    photos: [],
    query: "",
    filters: {
      order_by: "relevant",
      color: "any",
      orientation: "any",
    },
    status: "init",
  };
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      ...initialState,
    });
  });

  it("sets status to loading when getPhotos is pending", () => {
    const action = { type: getPhotos.pending.type, meta: { arg: 1 } };
    const state = reducer(initialState, action);
    expect(state.status).toEqual("loading");
  });

  it("sets the status to idle when getPhotos is fulfilled", () => {
    const action = {
      type: getPhotos.fulfilled.type,
      payload: { photos: results, totalPages: 1 },
    };
    const state = reducer(initialState, action);
    expect(state.photos).toEqual(results);
    expect(state.status).toEqual("idle");
  });

  it("sets status to idle when getPhotos is rejected", () => {
    const action = {
      type: getPhotos.rejected.type,
      payload: { error: "mock error" },
    };
    const state = reducer(initialState, action);
    expect(state.status).toEqual("idle");
  });

  it("should set query on setSearch", () => {
    let state = reducer(initialState, setSearch("mockQuery"));
    expect(state.query).toEqual("mockQuery");
  });

  it("should set filters on setFilters", () => {
    let mockFilters = {
      orientation: "landscape",
      order_by: "relevance",
      color: "black_and_white",
    };

    let state = reducer(initialState, setFilters(mockFilters));
    expect(state.filters).toEqual(mockFilters);
  });

  it("should set filters to initial state filters on clearFilters", () => {
    let state = reducer(initialState, clearFilters());
    expect(state.filters).toEqual(initialState.filters);
  });
});

const results = [
  {
    id: "EpIUbeFrqwQ",
    created_at: "2018-08-06T23:45:42-04:00",
    updated_at: "2021-01-18T08:03:54-05:00",
    promoted_at: "2018-08-07T08:01:16-04:00",
    width: 3559,
    height: 4449,
    color: "#260c0c",
    blur_hash: "L34-hOof0ysotmR*Mxt7B:ae+aS#",
    description:
      "After about a mile hike to the cave, we threw around 200 feet of rope down and started repelling, at the bottom we saw this cool spot and had an idea.  “Brennan, toss me the lightsaber…”",
    alt_description: "person holding red lightsaber",
    urls: {
      raw: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwxfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwxfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=85",
      regular:
        "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwxfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
      small:
        "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwxfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
      thumb:
        "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwxfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/EpIUbeFrqwQ",
      html: "https://unsplash.com/photos/EpIUbeFrqwQ",
      download: "https://unsplash.com/photos/EpIUbeFrqwQ/download",
      download_location: "https://api.unsplash.com/photos/EpIUbeFrqwQ/download",
    },
    categories: [],
    likes: 551,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "cor44M_7H5w",
      updated_at: "2021-01-18T23:16:06-05:00",
      username: "caderoberts432",
      name: "Cade Roberts",
      first_name: "Cade",
      last_name: "Roberts",
      twitter_username: null,
      portfolio_url: "https://www.instagram.com/caderoberts432",
      bio: "Photographer, adventurer, barista, drone pilot, and life lover\r\n\r\nInstagram: @caderoberts432",
      location: null,
      links: {
        self: "https://api.unsplash.com/users/caderoberts432",
        html: "https://unsplash.com/@caderoberts432",
        photos: "https://api.unsplash.com/users/caderoberts432/photos",
        likes: "https://api.unsplash.com/users/caderoberts432/likes",
        portfolio: "https://api.unsplash.com/users/caderoberts432/portfolio",
        following: "https://api.unsplash.com/users/caderoberts432/following",
        followers: "https://api.unsplash.com/users/caderoberts432/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1540668082964-40b2cfe25a26?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
        medium:
          "https://images.unsplash.com/profile-1540668082964-40b2cfe25a26?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
        large:
          "https://images.unsplash.com/profile-1540668082964-40b2cfe25a26?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
      },
      instagram_username: "caderoberts432",
      total_collections: 0,
      total_likes: 111,
      total_photos: 19,
      accepted_tos: true,
    },
    tags: [],
  },
  {
    id: "ggg_B1MeqQk",
    created_at: "2020-01-20T19:26:12-05:00",
    updated_at: "2021-01-18T06:10:10-05:00",
    promoted_at: "2020-01-21T11:36:02-05:00",
    width: 6214,
    height: 4143,
    color: "#0c2640",
    blur_hash: "LKAw*tbybdRj8^xvo#kCDhjaj]oK",
    description: "Stormtroopers from a recent trip to Walt Disney World.",
    alt_description: "white robot toy on black background",
    urls: {
      raw: "https://images.unsplash.com/photo-1579566346927-c68383817a25?ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwyfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1579566346927-c68383817a25?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwyfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=85",
      regular:
        "https://images.unsplash.com/photo-1579566346927-c68383817a25?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwyfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
      small:
        "https://images.unsplash.com/photo-1579566346927-c68383817a25?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwyfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
      thumb:
        "https://images.unsplash.com/photo-1579566346927-c68383817a25?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwyfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/ggg_B1MeqQk",
      html: "https://unsplash.com/photos/ggg_B1MeqQk",
      download: "https://unsplash.com/photos/ggg_B1MeqQk/download",
      download_location: "https://api.unsplash.com/photos/ggg_B1MeqQk/download",
    },
    categories: [],
    likes: 205,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "AcP3SEk6oio",
      updated_at: "2021-01-18T20:31:00-05:00",
      username: "sushioutlaw",
      name: "Brian McGowan",
      first_name: "Brian",
      last_name: "McGowan",
      twitter_username: null,
      portfolio_url: null,
      bio: "INFP, Optimist, Creative, Photographer, Dog Rescuer, Apple Enthusiast, Disney Fan, Post-it User, Whiteboard Master",
      location: "Melbourne, Florida",
      links: {
        self: "https://api.unsplash.com/users/sushioutlaw",
        html: "https://unsplash.com/@sushioutlaw",
        photos: "https://api.unsplash.com/users/sushioutlaw/photos",
        likes: "https://api.unsplash.com/users/sushioutlaw/likes",
        portfolio: "https://api.unsplash.com/users/sushioutlaw/portfolio",
        following: "https://api.unsplash.com/users/sushioutlaw/following",
        followers: "https://api.unsplash.com/users/sushioutlaw/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1555521519416-bff802809a9d?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
        medium:
          "https://images.unsplash.com/profile-1555521519416-bff802809a9d?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
        large:
          "https://images.unsplash.com/profile-1555521519416-bff802809a9d?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
      },
      instagram_username: "sushioutlaw",
      total_collections: 7,
      total_likes: 1529,
      total_photos: 140,
      accepted_tos: true,
    },
    tags: [
      {
        type: "search",
        title: "helmet",
      },
      {
        type: "search",
        title: "robot",
      },
      {
        type: "search",
        title: "apparel",
      },
    ],
  },
  {
    id: "cPF2nlWcMY4",
    created_at: "2016-08-29T04:05:30-04:00",
    updated_at: "2021-01-18T18:00:41-05:00",
    promoted_at: "2016-08-29T04:05:30-04:00",
    width: 5893,
    height: 3934,
    color: "#d9c0a6",
    blur_hash: "LDN9:#oIWBI;~WWAM|xtE1S5M{nh",
    description: "Stormtrooper walking on sand",
    alt_description: "Stormtrooper minifigure walking on the sand",
    urls: {
      raw: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwzfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwzfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=85",
      regular:
        "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwzfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
      small:
        "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwzfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
      thumb:
        "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxODk0NjZ8MHwxfHNlYXJjaHwzfHxzdGFyJTIwd2Fyc3xlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
    },
    links: {
      self: "https://api.unsplash.com/photos/cPF2nlWcMY4",
      html: "https://unsplash.com/photos/cPF2nlWcMY4",
      download: "https://unsplash.com/photos/cPF2nlWcMY4/download",
      download_location: "https://api.unsplash.com/photos/cPF2nlWcMY4/download",
    },
    categories: [],
    likes: 1509,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: "ZSNab2nc2ls",
      updated_at: "2021-01-18T23:16:08-05:00",
      username: "danielkcheung",
      name: "Daniel Cheung",
      first_name: "Daniel",
      last_name: "Cheung",
      twitter_username: "danielkcheung",
      portfolio_url: "https://makeseosimpleagain.com",
      bio: "SEO consultant who happens to enjoy photographing LEGO minifigures from time to time.",
      location: "Sydney, NSW",
      links: {
        self: "https://api.unsplash.com/users/danielkcheung",
        html: "https://unsplash.com/@danielkcheung",
        photos: "https://api.unsplash.com/users/danielkcheung/photos",
        likes: "https://api.unsplash.com/users/danielkcheung/likes",
        portfolio: "https://api.unsplash.com/users/danielkcheung/portfolio",
        following: "https://api.unsplash.com/users/danielkcheung/following",
        followers: "https://api.unsplash.com/users/danielkcheung/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-fb-1467929753-02a75cc39300.jpg?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
        medium:
          "https://images.unsplash.com/profile-fb-1467929753-02a75cc39300.jpg?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
        large:
          "https://images.unsplash.com/profile-fb-1467929753-02a75cc39300.jpg?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
      },
      instagram_username: "naughtyminifigs",
      total_collections: 1,
      total_likes: 9,
      total_photos: 99,
      accepted_tos: true,
    },
    tags: [
      {
        type: "landing_page",
        title: "toy",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "things",
              pretty_slug: "Things",
            },
            subcategory: {
              slug: "toys",
              pretty_slug: "Toys",
            },
          },
          title: "Toys Pictures",
          subtitle: "Download free toys images",
          description:
            "Choose from a curated selection of toys photos. Every picture of toys are always free on Unsplash.",
          meta_title:
            "500+ Toys Pictures [HD] | Download Free Images on Unsplash",
          meta_description:
            "Download the perfect toys pictures. Find over 100+ of the best free toys images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
          cover_photo: {
            id: "gDiRwIYAMA8",
            created_at: "2018-12-23T04:53:49-05:00",
            updated_at: "2021-01-16T22:05:51-05:00",
            promoted_at: null,
            width: 6000,
            height: 4000,
            color: "#f3f3f3",
            blur_hash: "LINmvRR~t:kD.8t6kVIo?cnhM_kr",
            description: null,
            alt_description: "multicolored learning toys",
            urls: {
              raw: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb",
              regular:
                "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max",
              small:
                "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max",
              thumb:
                "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max",
            },
            links: {
              self: "https://api.unsplash.com/photos/gDiRwIYAMA8",
              html: "https://unsplash.com/photos/gDiRwIYAMA8",
              download: "https://unsplash.com/photos/gDiRwIYAMA8/download",
              download_location:
                "https://api.unsplash.com/photos/gDiRwIYAMA8/download",
            },
            categories: [],
            likes: 453,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            user: {
              id: "vpRYEb_J1rI",
              updated_at: "2021-01-17T00:30:13-05:00",
              username: "vbcreative",
              name: "Vanessa Bucceri",
              first_name: "Vanessa",
              last_name: "Bucceri",
              twitter_username: null,
              portfolio_url: "https://vanessabucceri.com",
              bio: "A west coast Canadian girl obsessed with all things design who builds websites for like-minded creative entrepreneurs and likes to take the occasional photo.",
              location: "Canada",
              links: {
                self: "https://api.unsplash.com/users/vbcreative",
                html: "https://unsplash.com/@vbcreative",
                photos: "https://api.unsplash.com/users/vbcreative/photos",
                likes: "https://api.unsplash.com/users/vbcreative/likes",
                portfolio:
                  "https://api.unsplash.com/users/vbcreative/portfolio",
                following:
                  "https://api.unsplash.com/users/vbcreative/following",
                followers:
                  "https://api.unsplash.com/users/vbcreative/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1545558877638-bc4406c5bfe8?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1545558877638-bc4406c5bfe8?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1545558877638-bc4406c5bfe8?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: "vanessa.bucceri",
              total_collections: 17,
              total_likes: 12,
              total_photos: 29,
              accepted_tos: true,
            },
          },
        },
      },
      {
        type: "search",
        title: "human",
      },
      {
        type: "landing_page",
        title: "person",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "people",
              pretty_slug: "People",
            },
          },
          title: "People Images \u0026 Pictures",
          subtitle: "Download free people images",
          description:
            "Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
          meta_title: "People Pictures [HQ] | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free people pictures. Download HD people photos for free on Unsplash.",
          cover_photo: {
            id: "PmNjS6b3XP4",
            created_at: "2017-04-20T18:04:07-04:00",
            updated_at: "2020-12-22T02:01:25-05:00",
            promoted_at: "2017-04-21T12:00:49-04:00",
            width: 4630,
            height: 3087,
            color: "#a6d9d9",
            blur_hash: "LjI=x%:QUbv#NHWVa}kCt7jFjZfQ",
            description: "Summer in France with baby",
            alt_description: "woman carrying baby while walking",
            urls: {
              raw: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb",
              regular:
                "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max",
              small:
                "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max",
              thumb:
                "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max",
            },
            links: {
              self: "https://api.unsplash.com/photos/PmNjS6b3XP4",
              html: "https://unsplash.com/photos/PmNjS6b3XP4",
              download: "https://unsplash.com/photos/PmNjS6b3XP4/download",
              download_location:
                "https://api.unsplash.com/photos/PmNjS6b3XP4/download",
            },
            categories: [],
            likes: 1921,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            user: {
              id: "7S_pCRiCiQo",
              updated_at: "2020-12-22T18:27:17-05:00",
              username: "thedakotacorbin",
              name: "Dakota Corbin",
              first_name: "Dakota",
              last_name: "Corbin",
              twitter_username: "thedakotacorbin",
              portfolio_url: "http://www.dakotacorbin.com",
              bio: "Husband | Father | Creator",
              location: "Utah, United States",
              links: {
                self: "https://api.unsplash.com/users/thedakotacorbin",
                html: "https://unsplash.com/@thedakotacorbin",
                photos: "https://api.unsplash.com/users/thedakotacorbin/photos",
                likes: "https://api.unsplash.com/users/thedakotacorbin/likes",
                portfolio:
                  "https://api.unsplash.com/users/thedakotacorbin/portfolio",
                following:
                  "https://api.unsplash.com/users/thedakotacorbin/following",
                followers:
                  "https://api.unsplash.com/users/thedakotacorbin/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1593623494202-55ffc4dc725cimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1593623494202-55ffc4dc725cimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1593623494202-55ffc4dc725cimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: "thedakotacorbin",
              total_collections: 0,
              total_likes: 1,
              total_photos: 44,
              accepted_tos: true,
            },
          },
        },
      },
    ],
  },
];
