const fields = [
  [{
    id: 'firstName',
    placeholder: 'First name',
    required: true,
    type: 'text',
  },
  {
    id: 'lastName',
    placeholder: 'Last name',
    required: true,
    type: 'text',
  }],
  {
    id: 'Email',
    required: true,
    type: 'text',
  },
  {
    id: 'address1',
    placeholder: 'Address 1',
    type: 'text',
  },
  [{
    id: 'city',
    type: 'text',
  },
  {
    id: 'state',
    type: 'text',
  },
  {
    id: 'zip',
    type: 'text',
  }],
  {
    id: 'phone',
    required: true,
    type: 'text',
  },
  {
    id: 'jobTitle',
    options: [
      'Engineer - Lead',
      'Engineer - Mid Level',
      'Engineer - Junior',
      'Engineer - Front End Focused',
      'Engineer - Backend Focused',
      'Engineer - Full Stack',
    ],
    placeholder: 'Please select job title',
    type: 'select',
  },
  {
    id: 'reason',
    placeholder: 'Describe why you are a good fit for the job you are applying for.',
    type: 'textarea',
  }
]

export default fields;