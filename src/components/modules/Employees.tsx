import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';

import ModuleContainer from 'components/generic/ModuleContainer';
import Title from 'components/modules/Title';

import { Employee as EmployeeType } from 'data/employee';

import { tablet, landscape } from 'lib/media';
import { rem } from 'lib/polished';


const Employee: FunctionComponent<EmployeeType & { className?: string; }> = ({ className, firstName, lastName, portrait }) => (
	<li className={className}>
		<picture>
			<source srcSet={portrait.fixed.srcSet} media={tablet.replace('@media', '')} />
			<img src={portrait.fixed.src} alt={`${firstName} ${lastName}`} />
		</picture>
		<h4>{firstName} {lastName}</h4>
	</li>
);

const StyledEmployee = styled(Employee)`
	margin: 0;
	color: ${props => props.theme.colors.background};

	picture, img {
		margin: 0;
	}

	h4 {
		margin: 0;
		color: currentColor;
	}
`;

interface EmployeesProps {
	className?: string;
	employees: EmployeeType[];
}

const Employees: FunctionComponent<EmployeesProps> = ({ className, employees }) => (
	<ModuleContainer className={className}>
		<ul>
			{employees.map((employee: EmployeeType) => (
				<StyledEmployee
					key={employee.firstName + employee.lastName}
					{...employee}
				/>)
			)}
		</ul>
	</ModuleContainer>
);

export default styled(Employees)`
	background-color: ${props => props.theme.colors.brand};
	color: ${props => props.theme.colors.background};
	padding: ${props => rem(props.theme.spacings.medium)};

	${tablet} {
		padding: ${props => rem(props.theme.spacings.xlarge)};
	}

	ul {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: ${props => rem(props.theme.spacings.medium)};
		list-style: none;
		margin: 0;

		${landscape} {
			grid-template-columns: repeat(2, 1fr);
		}

		${tablet} {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	${Title} + & {
		padding-top: ${props => rem(props.theme.spacings.large)};
		margin-top: ${props => rem(-props.theme.spacings.large)};

		${tablet} {
			padding-top: ${props => rem(props.theme.spacings.xlarge)};
			margin-top: ${props => rem(-props.theme.spacings.xlarge)};
		}
	}
`;
