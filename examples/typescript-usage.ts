/**
 * TypeScript Usage Examples for JSON Resume Schema with Zod
 */

import {
  Resume,
  validateResume,
  parseResume,
  basicsSchema,
  workSchema,
  educationSchema,
} from '@jsonresume/schema';

// Example 1: Type-safe resume object
const myResume: Resume = {
  basics: {
    name: 'John Doe',
    label: 'Software Engineer',
    email: 'john@example.com',
    url: 'https://johndoe.com',
    summary: 'Full-stack developer with 5 years of experience',
    location: {
      city: 'San Francisco',
      countryCode: 'US',
      region: 'California',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'johndoe',
        url: 'https://github.com/johndoe',
      },
    ],
  },
  work: [
    {
      name: 'Tech Corp',
      position: 'Senior Developer',
      startDate: '2020-01',
      endDate: '2024-06',
      summary: 'Led development of cloud infrastructure',
      highlights: ['Reduced costs by 30%', 'Improved performance by 50%'],
    },
  ],
  education: [
    {
      institution: 'University of Technology',
      area: 'Computer Science',
      studyType: 'Bachelor',
      startDate: '2015',
      endDate: '2019',
    },
  ],
  skills: [
    {
      name: 'Web Development',
      level: 'Expert',
      keywords: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
    },
  ],
};

// Example 2: Validate with detailed results
console.log('Example 1: Validation');
const result = validateResume(myResume);
if (result.valid) {
  console.log('Resume is valid!');
  console.log('Validated data:', result.data);
} else {
  console.log('Validation errors:', result.errors);
}

// Example 3: Parse and throw on error
console.log('\nExample 2: Parse (throws on error)');
try {
  const validatedResume = parseResume(myResume);
  console.log('Parsed resume:', validatedResume.basics?.name);
} catch (error) {
  console.error('Validation failed:', error);
}

// Example 4: Validate individual sections
console.log('\nExample 3: Validate individual sections');
const basicsResult = basicsSchema.safeParse({
  name: 'Jane Smith',
  email: 'jane@example.com',
});
console.log('Basics validation:', basicsResult.success);

// Example 5: Type inference
console.log('\nExample 4: Type inference');
type WorkExperience = typeof myResume.work;
// TypeScript knows this is an array of Work objects or undefined

// Example 6: Handling invalid data
console.log('\nExample 5: Handling invalid data');
const invalidResume = {
  basics: {
    name: 'Test User',
    email: 'not-an-email', // Invalid email
  },
};

const invalidResult = validateResume(invalidResume);
if (!invalidResult.valid) {
  console.log('Validation errors:');
  invalidResult.errors?.forEach((err) => {
    console.log(`  - ${err.path.join('.')}: ${err.message}`);
  });
}
