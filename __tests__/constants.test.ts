import { describe, it, expect } from 'vitest';
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS } from '../constants';

describe('Constants', () => {
  describe('PERSONAL_INFO', () => {
    it('has all required personal information fields', () => {
      expect(PERSONAL_INFO).toHaveProperty('name');
      expect(PERSONAL_INFO).toHaveProperty('email');
      expect(PERSONAL_INFO).toHaveProperty('phone');
      expect(PERSONAL_INFO).toHaveProperty('role');
      expect(PERSONAL_INFO).toHaveProperty('tagline');
      expect(PERSONAL_INFO).toHaveProperty('location');
      expect(PERSONAL_INFO).toHaveProperty('summary');

      expect(typeof PERSONAL_INFO.name).toBe('string');
      expect(typeof PERSONAL_INFO.email).toBe('string');
      expect(typeof PERSONAL_INFO.summary).toBe('string');
      expect(typeof PERSONAL_INFO.role).toBe('string');
    });

    it('has valid email format', () => {
      expect(PERSONAL_INFO.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('has non-empty required fields', () => {
      expect(PERSONAL_INFO.name.length).toBeGreaterThan(0);
      expect(PERSONAL_INFO.email.length).toBeGreaterThan(0);
      expect(PERSONAL_INFO.summary.length).toBeGreaterThan(0);
      expect(PERSONAL_INFO.role.length).toBeGreaterThan(0);
    });
  });

  describe('EXPERIENCES', () => {
    it('is an array with experience items', () => {
      expect(Array.isArray(EXPERIENCES)).toBe(true);
      expect(EXPERIENCES.length).toBeGreaterThan(0);
    });

    it('has properly structured experience items', () => {
      EXPERIENCES.forEach(experience => {
        expect(experience).toHaveProperty('id');
        expect(experience).toHaveProperty('company');
        expect(experience).toHaveProperty('role');
        expect(experience).toHaveProperty('period');
        expect(experience).toHaveProperty('description');

        expect(typeof experience.id).toBe('string');
        expect(typeof experience.company).toBe('string');
        expect(typeof experience.role).toBe('string');
        expect(typeof experience.period).toBe('string');
        expect(Array.isArray(experience.description)).toBe(true);
      });
    });
  });

  describe('SKILLS', () => {
    it('is an array with skill items', () => {
      expect(Array.isArray(SKILLS)).toBe(true);
      expect(SKILLS.length).toBeGreaterThan(0);
    });

    it('has properly structured skill items', () => {
      SKILLS.forEach(skill => {
        expect(skill).toHaveProperty('name');
        expect(skill).toHaveProperty('category');
        expect(skill).toHaveProperty('level');

        expect(typeof skill.name).toBe('string');
        expect(['Core', 'Testing', 'Performance', 'DevOps']).toContain(skill.category);
        expect(typeof skill.level).toBe('number');
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('PROJECTS', () => {
    it('is an array with project items', () => {
      expect(Array.isArray(PROJECTS)).toBe(true);
      expect(PROJECTS.length).toBeGreaterThan(0);
    });

    it('has properly structured project items', () => {
      PROJECTS.forEach(project => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('impact');
        expect(project).toHaveProperty('tech');

        expect(typeof project.id).toBe('string');
        expect(typeof project.title).toBe('string');
        expect(typeof project.description).toBe('string');
        expect(typeof project.impact).toBe('string');
        expect(Array.isArray(project.tech)).toBe(true);
      });
    });
  });
});
