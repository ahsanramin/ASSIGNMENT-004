const jobsData = [
  { id: 1, company: 'Mobile First Corp', position: 'React Native Developer', location: 'Remote', type: 'Full-time', salary: '$130,000-$175,000', description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.', status: 'all' },
  { id: 2, company: 'WebFlow Agency', position: 'Web Designer & Developer', location: 'Los Angeles, CA', type: 'Part-time ', salary: ' $80,000 - $120,000', description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.', status: 'all' },
  { id: 3, company: 'DataViz Solutions', position: 'Data Visualization Specialist', location: 'Boston, MA ', type: ' Full-time', salary: '$125,000 - $165,000', description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.', status: 'all' },
  { id: 4, company: 'CloudFirst Inc', position: 'Backend Developer', location: 'Seattle, WA', type: ' Full-time', salary: '$140,000 - $190,000', description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.', status: 'all' },
  { id: 5, company: 'Innovation Labs', position: 'UI/UX Engineer', location: 'Austin, TX', type: ' Full-time', salary: '$110,000 - $150,000', description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.', status: 'all' },
  { id: 6, company: 'MegaCorp Solutions', position: 'JavaScript Developer', location: 'New York, NY', type: 'Full-time ', salary: ' $130,000 - $170,00', description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.', status: 'all' },
  { id: 7, company: 'StartupXYZ', position: 'Full Stack Engineer', location: 'Remote', type: 'Full-time', salary: ' $120,000 - $160,000', description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.', status: 'all' },
  { id: 8, company: 'TechCorp Industries', position: 'Senior Frontend Developer', location: 'San Francisco, CA', type: 'Full-time', salary: '$130,000 - $175,000', description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.', status: 'all' },
];
let currentTab = 'all';
const totalEl = document.getElementById('totalCount');
const interviewEl = document.getElementById('interviewCount');
const rejectedEl = document.getElementById('rejectedCount');
const jobsGrid = document.getElementById('jobsGrid');
const tabAll = document.getElementById('tabAll');
const tabInterview = document.getElementById('tabInterview');
const tabRejected = document.getElementById('tabRejected');
const tabs = [tabAll, tabInterview, tabRejected];
function updateCounts() {
  const total = jobsData.length;
  const interview = jobsData.filter(j => j.status === 'interview').length;
  const rejected = jobsData.filter(j => j.status === 'rejected').length;
  totalEl.textContent = total;
  interviewEl.textContent = interview;
  rejectedEl.textContent = rejected;
}
function renderJobs() {
  const filtered = currentTab === 'all' ? jobsData : jobsData.filter(j => j.status === currentTab);
  jobsGrid.innerHTML = '';
  if (filtered.length === 0) {
    jobsGrid.innerHTML = `
            <div class="bg-gray-50 rounded-lg py-12 sm:py-16 px-4 sm:px-8 text-center text-gray-400">
                <i class="fa-regular fa-briefcase text-4xl sm:text-5xl mb-4"></i>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-600">No jobs available</h3>
                <p class="text-xs sm:text-sm mt-1">Check back soon for new job opportunities</p>
            </div>
        `;
    updateCounts();
    return;
  }
  filtered.forEach(job => {
    const card = document.createElement('div');
    card.className = 'bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition relative job-card';
    card.dataset.id = job.id;
    const isInterview = job.status === 'interview';
    const isRejected = job.status === 'rejected';
    const interviewBtnClass = isInterview ? 'text-green-600 bg-green-50' : 'text-green-600 border border-green-300 hover:bg-green-50';
    const rejectedBtnClass = isRejected ? 'text-red-600 bg-red-50' : 'text-red-600 border border-red-300 hover:bg-red-50';
    const badgeText = job.status === 'all' ? 'NOT APPLIED' : job.status === 'interview' ? 'INTERVIEW' : 'REJECTED';
    card.innerHTML = `
            <div class="flex flex-col sm:flex-row justify-between items-start gap-3">
                <div class="flex-1">
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800">${job.company}</h3>
                    <p class="text-sm sm:text-base text-gray-700 mt-1">${job.position}</p>
                    <p class="text-xs sm:text-sm text-gray-500 mt-1">${job.location} • ${job.type} • ${job.salary}</p>
                </div>
                <button class="delete-btn text-gray-400 hover:text-red-500 transition self-end sm:self-start" data-id="${job.id}">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
            <span class="inline-block bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full mt-3 mb-3">${badgeText}</span>
            <p class="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">${job.description}</p>
            <div class="flex items-center">
                <div class="flex flex-wrap gap-2 sm:gap-4">
                    <button class="action-btn interview-btn ${interviewBtnClass} font-semibold text-xs sm:text-sm px-2 py-1 rounded transition" data-id="${job.id}">INTERVIEW</button>
                    <button class="action-btn rejected-btn ${rejectedBtnClass} font-semibold text-xs sm:text-sm px-2 py-1 rounded transition" data-id="${job.id}">REJECTED</button>
                </div>
            </div>
        `;
    jobsGrid.appendChild(card);
  });
  updateCounts();
}

function updateJobStatus(jobId, newStatus) {
  const job = jobsData.find(j => j.id === jobId);
  if (!job) return;
  job.status = job.status === newStatus ? 'all' : newStatus;
  renderJobs();
}

function switchTab(tab) {
  currentTab = tab;
  tabs.forEach(t => {
    if (t.dataset.tab === tab) {
      t.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
      t.classList.remove('text-gray-500');
    } else {
      t.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
      t.classList.add('text-gray-500');
    }
  });
  renderJobs();
}

tabAll.addEventListener('click', () => switchTab('all'));
tabInterview.addEventListener('click', () => switchTab('interview'));
tabRejected.addEventListener('click', () => switchTab('rejected'));

jobsGrid.addEventListener('click', (e) => {
  const interviewBtn = e.target.closest('.interview-btn');
  const rejectedBtn = e.target.closest('.rejected-btn');
  const deleteBtn = e.target.closest('.delete-btn');
  if (interviewBtn) {
    updateJobStatus(parseInt(interviewBtn.dataset.id), 'interview');
  } else if (rejectedBtn) {
    updateJobStatus(parseInt(rejectedBtn.dataset.id), 'rejected');
  } else if (deleteBtn) {
    const card = deleteBtn.closest('.job-card');
    if (card) {
      const id = parseInt(card.dataset.id);
      const index = jobsData.findIndex(j => j.id === id);
      if (index !== -1) {
        jobsData.splice(index, 1);
        renderJobs();
      }
    }
  }
});

renderJobs();