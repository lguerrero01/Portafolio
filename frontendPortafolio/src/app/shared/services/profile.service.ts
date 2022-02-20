import { Skill } from './../models/experiance.model';
import { Injectable } from '@angular/core';
//////////////
// interfaces
//////////////
import { EducationData, Experiance, Proyect } from '../models/experiance.model';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //////////////
  // Constructor
  //////////////
  constructor() {}

  //////////////
  // Proyects
  //////////////
  public projects: Proyect[] = [
    {
      id: 1,
      title: 'Funnel de venta de la TribuEsencial',
      desc: 'Hecho para captar oportunidades potenciales de ventas, utiliza reactive forms, stepper y componentes personalizados',
      livedemo: 'https://latribuesencial.com/',
      githurl: 'https://github.com/lguerrero01/latribuesencial',
      mediumlink:
        '',
      imgUrl: 'assets/img/images/project1.png',
      tech: 'Angular 11, Laravel, RxJs, Bootstrap',
    },
    {
      id: 2,
      title: 'Login con autenticacion',
      desc: 'Login usando el STACK MEAN, poniendo aprueba los middleware.',
      livedemo: '',
      githurl: 'https://github.com/lguerrero01/authServer',
      mediumlink: '',
      imgUrl: 'assets/img/images/project2.png',
      tech: 'Angular 11, NodeJs, MongoDB, Express',
    },

    {
      id: 3,
      title: 'App de Hogwarts',
      desc: 'Escuela de Hechicería donde podras por cada casa consultar los personajes usando una API publica, listar personajes, ordenar y filtrar',
      livedemo: '',
      githurl: 'https://github.com/lguerrero01/hogwartsTest',
      mediumlink:
        '',
      imgUrl: 'assets/images/project3.png',
      tech: 'Angular 10, Bootstrap, AOS',
    },
    {
      id: 4,
      title: 'Portafolio',
      desc: 'Este portafolio tambien es parte de mis proyectos',
      livedemo: '',
      githurl: 'https://github.com/lguerrero01/hogwartsTest',
      mediumlink:
        '',
      imgUrl: 'assets/images/project3.png',
      tech: 'Angular 13, Bootstrap, AOS',
    },
  ];

  //////////////
  // About
  //////////////
  public about2: string = `Software Developer con mas de 3 años de experiencia .
  Principalmente tengo amplia experiencia en Angular 2+ y sus ultimas versiones, Javascript, NodeJS y UI con Responsive Designs .
  Buen conocimiento de Typescript, Bootstrap, Material UI, SQL, MongoDB entre otros...`;

  public about: string =
    'Amante de la innovación y todo lo relacionado con tecnologia para generar nuevos conocimientos. Muy calculador sobre el tiempo que dedico y el trabajo que realizo.';
  //////////////
  // Resume
  //////////////
  public resumeurl: string =
    'https://drive.google.com/file/d/1uPVrYnfdu7Sq3UMEaiVWd2DOv4sPyeMU/view';

  //////////////
  // Skills
  //////////////
  public skillsData: Skill[] = [
    {
      id: 1,
      skill: 'ANGULAR 2+',
      progress: '90%',
    },
    {
      id: 2,
      skill: 'NodeJS',
      progress: '70%',
    },
    {
      id: 3,
      skill: 'JAVASCRIPT',
      progress: '85%',
    },
    {
      id: 4,
      skill: 'MongoDB',
      progress: '75%',
    },
    {
      id: 5,
      skill: 'SQL',
      progress: '65%',
    },
    {
      id: 6,
      skill: ' FIREBASE',
      progress: '50%',
    },
    {
      id: 7,
      skill: ' GraphQL',
      progress: '40%',
    },
    {
      id: 8,
      skill: 'LARAVEL',
      progress: '65%',
    },
    {
      id: 8,
      skill: 'Typescrip',
      progress: '85%',
    },
  ];
  //////////////
  // Education
  //////////////
  public educationData: EducationData[] = [
    {
      id: 1,
      from_to_year: '2015 - Presente',
      education: 'Licenciatura',
      stream: 'Licenciatura en Computacion',
      institution: 'Universidad de Carabobo',
      info: `Facultad de Ciencias y Tecnologia (Facyt) actualmente cursando 5to Semestre`,
    },
    {
      id: 2,
      from_to_year: '2010 - 2015',
      education: 'Liceo',
      stream: 'Bachiller en Ciencia',
      institution: 'Lino de Clemente',
      info: ``,
    },
    {
      id: 3,
      from_to_year: '2005 - 2010',
      education: 'Escolar',
      stream: 'Educacion Escolar',
      institution: 'U.E Francisco Arismendi',
      info: ``,
    },
  ];

  //////////////
  // Experience
  //////////////
  public experienceData: Experiance[] = [
    {
      id: 1,
      company: 'Innovo Company',
      location: 'Venezuela, Carabobo',
      timeline: 'Agosto 2021 a Diciembre 2021',
      role: 'Software Developer',
      work: 'Trabajando como full stack developer .Responsable principalmente del manejo de UI en AngularJs y Backend con LARAVEL y SQL',
    },
    {
      id: 2,
      company: 'OESVICA',
      location: 'Venezuela, Carabobo, Isabelica',
      timeline: 'Enero 2020 a Junio 2020',
      role: 'Software Developer',
      work: `Tecnologias: Angular , Node JS , MongoDB, ExpressJs . 
      Trabaje en Aplicacion web de calificacion de empleados por role usando el MEAN STACK.`,
    },

    {
      id: 3,
      company: 'Workana',
      location: 'Remoto',
      timeline: 'Enero 2020 hasta el presente',
      role: 'Frontend  Developer',
      work: `Tecnologias : Angular , Node JS. .
      Trabaje tanto en consumo y creaciones de Apis REST, panel de administración y UI de aplicaciones. .
      Secciones creadas como plantillas para email, landing pages, servicios y automatizaciónes. 
  `,
    },
  ];

  //////////////
  // Get Methods
  //////////////
  public get skills(): Skill[] {
    return this.skillsData;
  }

  public get getProjects(): Proyect[] {
    return this.projects;
  }

  public get education(): EducationData[] {
    return this.educationData;
  }

  public get experience(): Experiance[] {
    return this.experienceData;
  }
}
