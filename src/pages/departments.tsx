import { Link } from 'react-router-dom';

const DepartmentsPage = () => {
  const departmentLinks = [
    { label: 'Events', href: '/departments/events' },
    { label: 'Design', href: '/departments/design' },
    { label: 'Editorial', href: '/departments/editorial' },
    { label: 'Technical', href: '/departments/technical' },
    { label: 'Human Resources', href: '/departments/hr' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Departments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {departmentLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex flex-col items-center p-4 bg-dark border-2 border-accent rounded-lg hover:shadow-[4px_4px_0_0_#BFDB38] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <h2 className="text-xl text-white">{link.label}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage; 