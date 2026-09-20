/**
 * Supabase Client & Unified Data Provider
 * English Teaching Unit (ETU) - Faculty of Engineering, University of Peradeniya
 */

const SUPABASE_URL = 'https://dbfnjoejntbxdnzixpls.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_YjlyCxHROS4bddkt0T7A1A_PqkjBQEk';

let supabase = null;
if (typeof window !== 'undefined' && window.supabase) {
  try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (err) {
    console.warn('Could not initialize Supabase client:', err);
  }
}

// Fallback curated dataset for groups, student rosters, and showcase projects
const FALLBACK_DATA = {
  groups: [
    {
      id: 'ab01',
      name: 'Group AB01',
      slug: 'ab01',
      tagline: 'Pioneers in collaborative storytelling and visual media',
      description: 'Group AB01 focuses on innovative forms of communication, bridging technical engineering concepts with creative media, interactive drama, and visual documentation.',
      coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      cardImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
      students: [
        { regNo: 'E/25/---', name: 'Methnal Liyanage', committee: 'Committee responsibillities', role: 'Group Leader' }
      ]
    },
    {
      id: 'ab02',
      name: 'Group AB02',
      slug: 'ab02',
      tagline: 'Exploring documentary arts and engineering narratives',
      description: 'Group AB02 specializes in documentary filmmaking, community research, and exploring societal impacts of modern engineering through in-depth investigative interviews.',
      coverImage: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80',
      cardImage: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80',
      students: [
        { regNo: 'E/25/022', name: 'Dinuka Senanayake', committee: 'Direction & Research', role: 'Group Leader' },
        { regNo: 'E/25/056', name: 'Anjana Silva', committee: 'Field Scriptwriting', role: 'Sub-Leader' },
        { regNo: 'E/25/091', name: 'Sachini Bandara', committee: 'Audio Engineering', role: 'Audio Specialist' },
        { regNo: 'E/25/133', name: 'Isuru Rathnayake', committee: 'Post-Production', role: 'Editor' },
        { regNo: 'E/25/167', name: 'Praveen Dias', committee: 'Public Outreach', role: 'Narrator' }
      ]
    },
    {
      id: 'ab03',
      name: 'Group AB03',
      slug: 'ab03',
      tagline: 'Creative presentations bridging language and technology',
      description: 'Group AB03 masters rhetorical eloquence, slide design, and persuasive technical speech, demonstrating how complex engineering concepts can be explained with clarity.',
      coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      cardImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      students: [
        { regNo: 'E/25/019', name: 'Hiran Jayasundara', committee: 'Speech & Rhetoric', role: 'Group Leader' },
        { regNo: 'E/25/048', name: 'Malithi Weerakkody', committee: 'Slide Architecture', role: 'Sub-Leader' },
        { regNo: 'E/25/088', name: 'Chamath Weerasinghe', committee: 'Data Visualization', role: 'Analyst' },
        { regNo: 'E/25/124', name: 'Nethmi Karunaratne', committee: 'Technical Speech', role: 'Presenter' },
        { regNo: 'E/25/159', name: 'Kusal Gunasekara', committee: 'Stage & Logistics', role: 'Coordinator' }
      ]
    },
    {
      id: 'ab04',
      name: 'Group AB04',
      slug: 'ab04',
      tagline: 'Artistic expression through multimedia and gallery work',
      description: 'Group AB04 fuses engineering schematics, botanical sketches, and multimedia aesthetics into compelling visual art series that communicate engineering elegance.',
      coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
      cardImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
      students: [
        { regNo: 'E/25/007', name: 'Dulani Alahakoon', committee: 'Visual Fine Arts', role: 'Group Leader' },
        { regNo: 'E/25/042', name: 'Ravindu Dissanayake', committee: 'Digital Illustration', role: 'Sub-Leader' },
        { regNo: 'E/25/083', name: 'Oshada Herath', committee: 'Exhibition Curation', role: 'Curator' },
        { regNo: 'E/25/119', name: 'Rashmi Samarasinghe', committee: 'Mixed Media', role: 'Artist' },
        { regNo: 'E/25/161', name: 'Akalanka Mendis', committee: 'Photography & Lighting', role: 'Photographer' }
      ]
    }
  ],

  projects: [
    // AB01 Projects
    {
      id: 'p1',
      groupSlug: 'ab01',
      groupName: 'Group AB01',
      category: 'Group Activities',
      filterCategory: 'group-activities',
      icon: '🎭',
      title: 'Engineering Language Fair 2024',
      description: 'A vibrant group activity showcasing language skills through engineering themes, interactive games, and communication stalls.',
      youtubeUrl: 'https://www.youtube.com/embed/bEIa9mjhJvI?si=luDoyookJfwMPeQ3',
      imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '14:20'
    },
    {
      id: 'p2',
      groupSlug: 'ab01',
      groupName: 'Group AB01',
      category: 'Presentations',
      filterCategory: 'presentations',
      icon: '📊',
      title: 'Structural Integrity: An Oral Report',
      description: 'Students present findings on eco-friendly building materials and structural analysis using professional technical English.',
      imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '08:20'
    },
    {
      id: 'p3',
      groupSlug: 'ab01',
      groupName: 'Group AB01',
      category: 'Documentaries',
      filterCategory: 'documentaries',
      icon: '🎬',
      title: "Campus Life: An Engineer's Story",
      description: 'A short documentary exploring the daily rhythm, resilience, and fellowship of first-year engineering students at Peradeniya.',
      imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '15:02'
    },
    {
      id: 'p4',
      groupSlug: 'ab01',
      groupName: 'Group AB01',
      category: 'Art & Explorer',
      filterCategory: 'art-explorer',
      icon: '🎨',
      title: 'Structures & Strokes',
      description: 'An art series inspired by civil engineering blueprints merged with the scenic greenery of the Peradeniya valley.',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
      isVideo: false
    },

    // AB02 Projects
    {
      id: 'p5',
      groupSlug: 'ab02',
      groupName: 'Group AB02',
      category: 'Group Activities',
      filterCategory: 'group-activities',
      icon: '🎭',
      title: 'Inter-Group Debate: Technology & Society',
      description: 'A structured Oxford-style debate challenging the ethical limits of automated engineering systems in developing economies.',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      isVideo: false
    },
    {
      id: 'p6',
      groupSlug: 'ab02',
      groupName: 'Group AB02',
      category: 'Presentations',
      filterCategory: 'presentations',
      icon: '📊',
      title: 'Renewable Energy: Speaking Up',
      description: 'Group AB02 presents their investigative study on decentralized solar grids across Central Province villages.',
      imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '10:45'
    },
    {
      id: 'p7',
      groupSlug: 'ab02',
      groupName: 'Group AB02',
      category: 'Documentaries',
      filterCategory: 'documentaries',
      icon: '🎬',
      title: 'The Making of an Engineer',
      description: 'Following three undergraduates across their workshop practicums, exam weeks, and cultural festivals.',
      imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '18:30'
    },
    {
      id: 'p8',
      groupSlug: 'ab02',
      groupName: 'Group AB02',
      category: 'Art & Explorer',
      filterCategory: 'art-explorer',
      icon: '🎨',
      title: 'Circuit Paintings & Ink',
      description: 'Mixed-media fine art combining printed circuit board (PCB) traces with traditional Sri Lankan motifs.',
      imageUrl: 'https://images.unsplash.com/photo-1501084291732-13b1ba830e22?auto=format&fit=crop&w=600&q=80',
      isVideo: false
    },

    // AB03 Projects
    {
      id: 'p9',
      groupSlug: 'ab03',
      groupName: 'Group AB03',
      category: 'Group Activities',
      filterCategory: 'group-activities',
      icon: '🎭',
      title: 'Interactive Technical Drama',
      description: 'A theatrical performance highlighting workshop safety protocols written, directed, and acted entirely in English.',
      imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80',
      isVideo: false
    },
    {
      id: 'p10',
      groupSlug: 'ab03',
      groupName: 'Group AB03',
      category: 'Presentations',
      filterCategory: 'presentations',
      icon: '📊',
      title: 'AI and the Future of Communication',
      description: 'A visionary presentation analyzing how generative language tools assist bilingual engineering students.',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '14:12'
    },
    {
      id: 'p11',
      groupSlug: 'ab03',
      groupName: 'Group AB03',
      category: 'Documentaries',
      filterCategory: 'documentaries',
      icon: '🎬',
      title: 'Peradeniya Through Our Eyes',
      description: 'A cinematic documentary highlighting the architectural marvel of Akbar Bridge and faculty traditions.',
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '20:05'
    },
    {
      id: 'p12',
      groupSlug: 'ab03',
      groupName: 'Group AB03',
      category: 'Art & Explorer',
      filterCategory: 'art-explorer',
      icon: '🎨',
      title: 'Language in Motion',
      description: 'A typographic poster series exploring how linguistic metaphors guide creative problem solving in robotics.',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      isVideo: false
    },

    // AB04 Projects
    {
      id: 'p13',
      groupSlug: 'ab04',
      groupName: 'Group AB04',
      category: 'Group Activities',
      filterCategory: 'group-activities',
      icon: '🎭',
      title: 'Language & Design Sprint',
      description: 'A high-intensity collaborative sprint where teams pitch sustainable consumer products under tight time constraints.',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      isVideo: false
    },
    {
      id: 'p14',
      groupSlug: 'ab04',
      groupName: 'Group AB04',
      category: 'Presentations',
      filterCategory: 'presentations',
      icon: '📊',
      title: 'Infrastructure & Riverine Bridges',
      description: 'A technical case study presentation focusing on fluid dynamics and bridge pier scour resilience.',
      imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '09:15'
    },
    {
      id: 'p15',
      groupSlug: 'ab04',
      groupName: 'Group AB04',
      category: 'Documentaries',
      filterCategory: 'documentaries',
      icon: '🎬',
      title: 'Voices of Innovation',
      description: 'Behind the scenes with first-year engineers testing prototype electric vehicles in the faculty workshop.',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      isVideo: true,
      time: '13:40'
    },
    {
      id: 'p16',
      groupSlug: 'ab04',
      groupName: 'Group AB04',
      category: 'Art & Explorer',
      filterCategory: 'art-explorer',
      icon: '🎨',
      title: 'Botanical Tech Sketches',
      description: 'Botanical drawings of campus trees intertwined with precision mechanical gears and draftsmanship.',
      imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
      isVideo: false
    }
  ]
};

// Data service methods exposed globally
window.ETUDataService = {
  getSupabaseClient() {
    return supabase;
  },

  async getGroups() {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('groups').select('*').order('name');
        if (!error && data && data.length > 0) {
          return data.map(g => {
            const fb = FALLBACK_DATA.groups.find(f => f.slug.toLowerCase() === g.slug.toLowerCase());
            return {
              ...fb,
              ...g,
              tagline: fb ? fb.tagline : g.name,
              coverImage: fb ? fb.coverImage : 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
              cardImage: fb ? fb.cardImage : 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
            };
          });
        }
      } catch (e) {
        console.warn('Falling back to local groups data:', e);
      }
    }
    return FALLBACK_DATA.groups;
  },

  async getGroupDetails(slug) {
    const cleanSlug = (slug || 'ab01').toLowerCase();
    const allGroups = await this.getGroups();
    const group = allGroups.find(g => g.slug.toLowerCase() === cleanSlug) || allGroups[0];

    const fallbackGroup = FALLBACK_DATA.groups.find(g => g.slug.toLowerCase() === cleanSlug) || FALLBACK_DATA.groups[0];
    const groupProjects = await this.getProjectsByGroup(group.slug);

    return {
      group: {
        ...fallbackGroup,
        ...group
      },
      students: fallbackGroup.students || [],
      projects: groupProjects
    };
  },

  async getProjectsByGroup(slug) {
    const cleanSlug = (slug || 'ab01').toLowerCase();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*, groups(name, slug)')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          const filtered = data.filter(p => p.groups && p.groups.slug.toLowerCase() === cleanSlug);
          if (filtered.length > 0) {
            return filtered.map(p => ({
              ...p,
              groupSlug: p.groups.slug,
              groupName: p.groups.name,
              imageUrl: p.image_url || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80'
            }));
          }
        }
      } catch (e) {
        console.warn('Falling back to local group projects:', e);
      }
    }
    return FALLBACK_DATA.projects.filter(p => p.groupSlug.toLowerCase() === cleanSlug);
  },

  async getAllProjects() {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*, groups(name, slug)')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          return data.map(p => ({
            ...p,
            groupSlug: p.groups ? p.groups.slug : 'ab01',
            groupName: p.groups ? p.groups.name : 'Group',
            imageUrl: p.image_url || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80'
          }));
        }
      } catch (e) {
        console.warn('Falling back to local all projects:', e);
      }
    }
    return FALLBACK_DATA.projects;
  },

  async getLatestProjects(limit = 3) {
    const all = await this.getAllProjects();
    return all.slice(0, limit);
  }
};
