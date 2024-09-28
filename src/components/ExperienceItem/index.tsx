import { Timeline } from 'flowbite-react';
import { RichText } from '../rich-text';
import Badge from '../Badge';
import { WorkExperience } from '@/types/work-experience';
import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { isNil } from 'lodash';

type ExperienceItemProps = {
  experience: WorkExperience;
};

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    companyLogo,
    companyName,
    description,

    role,

    technologies,
  } = experience;

  const startDate = new Date(experience.startDate);
  const endDate = new Date(experience.endDate);

  const formattedStartDate = format(startDate, 'MMM yyyy', {
    locale: ptBR,
  });
  const formattedEndDate = isNil(experience.endDate)
    ? 'Atualmente'
    : format(endDate, 'MMM yyyy', {
        locale: ptBR,
      });

  const end = endDate ? new Date(endDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`;

  return (
    <Timeline.Item>
      <Timeline.Point />
      <Timeline.Content>
        <Timeline.Title className="text-xl leading-7 mt-5 font-medium text-cornflower-blue mb-3  uppercase ">
          {role}
        </Timeline.Title>
        <Timeline.Title>{companyName}</Timeline.Title>
        <Timeline.Time>
          {formattedStartDate} - {formattedEndDate}{' '}
          {!isNil(experience.endDate) && '- ' + formattedDuration}
        </Timeline.Time>

        <Timeline.Body>
          <RichText content={description.raw} />
          <br />

          <h4 className=" text-lg leading-7 mt-5 font-medium text-gray-950 mb-3">
            Tecnologias Utilizadas:
          </h4>

          <div className="flex flex-wrap gap-2 ">
            {technologies?.map((tech) => (
              <Badge key={`tech-${tech.name}`} icon={tech.iconSvg}>
                {tech.name}
              </Badge>
            ))}
          </div>
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
  );
};
