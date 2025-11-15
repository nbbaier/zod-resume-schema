/**
 * JavaScript Usage Examples for JSON Resume Schema with Zod
 */

const { validateResume, parseResume, validate } = require('@jsonresume/schema');

// Example 1: Simple validation (callback-based, backward compatible)
console.log('Example 1: Callback-based validation (legacy API)');
const resume = {
  basics: {
    name: 'John Doe',
    email: 'john@example.com',
  },
};

validate(resume, (errors, valid) => {
  if (valid) {
    console.log('Resume is valid!');
  } else {
    console.log('Validation errors:', errors);
  }
});

// Example 2: Modern validation API
console.log('\nExample 2: Modern validation API');
const result = validateResume(resume);
if (result.valid) {
  console.log('Resume is valid!');
  console.log('Name:', result.data.basics?.name);
} else {
  console.log('Validation errors:', result.errors);
}

// Example 3: Parse (throws on error)
console.log('\nExample 3: Parse with error handling');
try {
  const validatedResume = parseResume(resume);
  console.log('Parsed successfully:', validatedResume.basics.name);
} catch (error) {
  console.error('Validation failed:', error.message);
}

// Example 4: Full resume example
console.log('\nExample 4: Full resume validation');
const fullResume = {
  $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json',
  basics: {
    name: 'Jane Smith',
    label: 'Full Stack Developer',
    image: '',
    email: 'jane.smith@example.com',
    phone: '(555) 123-4567',
    url: 'https://janesmith.dev',
    summary: 'Passionate developer with expertise in modern web technologies',
    location: {
      address: '123 Main St',
      postalCode: '94105',
      city: 'San Francisco',
      countryCode: 'US',
      region: 'California',
    },
    profiles: [
      {
        network: 'LinkedIn',
        username: 'janesmith',
        url: 'https://linkedin.com/in/janesmith',
      },
      {
        network: 'GitHub',
        username: 'janesmith',
        url: 'https://github.com/janesmith',
      },
    ],
  },
  work: [
    {
      name: 'Acme Corp',
      position: 'Senior Developer',
      url: 'https://acmecorp.com',
      startDate: '2020-01',
      summary: 'Developed and maintained web applications',
      highlights: [
        'Led migration to microservices architecture',
        'Reduced page load time by 40%',
      ],
    },
  ],
  education: [
    {
      institution: 'State University',
      url: 'https://stateuniversity.edu',
      area: 'Computer Science',
      studyType: 'Bachelor of Science',
      startDate: '2015',
      endDate: '2019',
      score: '3.8',
      courses: ['Data Structures', 'Algorithms', 'Web Development'],
    },
  ],
  skills: [
    {
      name: 'Frontend Development',
      level: 'Expert',
      keywords: ['React', 'TypeScript', 'CSS', 'HTML'],
    },
    {
      name: 'Backend Development',
      level: 'Advanced',
      keywords: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    },
  ],
  languages: [
    {
      language: 'English',
      fluency: 'Native',
    },
    {
      language: 'Spanish',
      fluency: 'Conversational',
    },
  ],
};

const fullResult = validateResume(fullResume);
console.log('Full resume valid:', fullResult.valid);
if (fullResult.valid) {
  console.log('Validated sections:', Object.keys(fullResult.data).filter(k => k !== '$schema'));
}

// Example 5: Error handling
console.log('\nExample 5: Detailed error handling');
const invalidResume = {
  basics: {
    name: 'Test User',
    email: 'invalid-email',
    url: 'not-a-url',
  },
  work: [
    {
      name: 123, // Should be string
      startDate: 'invalid-date',
    },
  ],
};

const invalidResult = validateResume(invalidResume);
if (!invalidResult.valid) {
  console.log('Found', invalidResult.errors.length, 'validation errors:');
  invalidResult.errors.forEach((err, i) => {
    console.log(`${i + 1}. Field: ${err.path.join('.')} - ${err.message}`);
  });
}
