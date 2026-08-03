/**
 * MenuItem ARIA Attributes Tests
 * 
 * Tests to verify proper ARIA implementation following WCAG 2.1 Level AA guidelines
 */

import { render, screen } from '@testing-library/react';
import { MenuItem } from '../MenuItem';
import { ThemeProvider } from 'styled-components';
import { theme } from '@lean-ids/tokens';

describe('MenuItem ARIA Attributes', () => {
  const renderWithTheme = (ui: React.ReactElement) => {
    return render(
      <ThemeProvider theme={theme}>
        {ui}
      </ThemeProvider>
    );
  };

  describe('Role Attribute', () => {
    it('should have role="menuitem" instead of role="button"', () => {
      renderWithTheme(<MenuItem label="Dashboard" />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).toBeInTheDocument();
    });

    it('should not have role="button"', () => {
      renderWithTheme(<MenuItem label="Dashboard" />);
      const buttons = screen.queryAllByRole('button');
      expect(buttons).toHaveLength(0);
    });
  });

  describe('aria-selected Attribute', () => {
    it('should have aria-selected="true" when state is active', () => {
      renderWithTheme(<MenuItem label="Dashboard" state="active" />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).toHaveAttribute('aria-selected', 'true');
    });

    it('should have aria-selected="false" when state is inactive', () => {
      renderWithTheme(<MenuItem label="Dashboard" state="inactive" />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).toHaveAttribute('aria-selected', 'false');
    });

    it('should NOT have aria-current attribute', () => {
      renderWithTheme(<MenuItem label="Dashboard" state="active" />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).not.toHaveAttribute('aria-current');
    });
  });

  describe('tabIndex Management', () => {
    it('should have tabIndex={0} when active', () => {
      renderWithTheme(<MenuItem label="Dashboard" state="active" />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).toHaveAttribute('tabIndex', '0');
    });

    it('should have tabIndex={-1} when inactive', () => {
      renderWithTheme(<MenuItem label="Dashboard" state="inactive" />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).toHaveAttribute('tabIndex', '-1');
    });

    it('should have tabIndex={-1} when disabled', () => {
      renderWithTheme(<MenuItem label="Dashboard" disabled />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).toHaveAttribute('tabIndex', '-1');
    });
  });

  describe('aria-haspopup Attribute', () => {
    it('should have aria-haspopup="menu" when hasChildren is true', () => {
      renderWithTheme(<MenuItem label="Settings" hasChildren />);
      const menuItem = screen.getByRole('menuitem', { name: 'Settings' });
      expect(menuItem).toHaveAttribute('aria-haspopup', 'menu');
    });

    it('should have aria-haspopup="menu" when nestedMenu is true', () => {
      renderWithTheme(<MenuItem label="Settings" nestedMenu />);
      const menuItem = screen.getByRole('menuitem', { name: 'Settings' });
      expect(menuItem).toHaveAttribute('aria-haspopup', 'menu');
    });

    it('should not have aria-haspopup when no children or nested menu', () => {
      renderWithTheme(<MenuItem label="Dashboard" />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).not.toHaveAttribute('aria-haspopup');
    });
  });

  describe('aria-disabled Attribute', () => {
    it('should have aria-disabled="true" when disabled', () => {
      renderWithTheme(<MenuItem label="Dashboard" disabled />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).toHaveAttribute('aria-disabled', 'true');
    });

    it('should have aria-disabled="false" when not disabled', () => {
      renderWithTheme(<MenuItem label="Dashboard" />);
      const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(menuItem).toHaveAttribute('aria-disabled', 'false');
    });
  });

  describe('Loading State', () => {
    it('should have aria-busy="true" when loading', () => {
      renderWithTheme(<MenuItem label="Dashboard" isLoading />);
      const menuItem = screen.getByRole('menuitem');
      expect(menuItem).toHaveAttribute('aria-busy', 'true');
    });
  });

  describe('Error State', () => {
    it('should have aria-invalid="true" when invalid', () => {
      renderWithTheme(<MenuItem label="Dashboard" isInvalid errorMessage="Error occurred" />);
      const menuItem = screen.getByRole('menuitem');
      expect(menuItem).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Accessibility Testing', () => {
    it('should be queryable by role and selected state', () => {
      renderWithTheme(
        <>
          <MenuItem label="Dashboard" state="active" />
          <MenuItem label="Settings" state="inactive" />
        </>
      );

      const selectedItem = screen.getByRole('menuitem', { selected: true });
      expect(selectedItem).toHaveTextContent('Dashboard');

      const unselectedItem = screen.getByRole('menuitem', { name: 'Settings' });
      expect(unselectedItem).toHaveAttribute('aria-selected', 'false');
    });

    it('should support custom styling via aria-selected attribute', () => {
      const { container } = renderWithTheme(<MenuItem label="Dashboard" state="active" />);
      const menuItem = container.querySelector('[aria-selected="true"]');
      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveTextContent('Dashboard');
    });
  });
});
