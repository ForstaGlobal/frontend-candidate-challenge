import { render, screen } from '@testing-library/react';
import { TestID } from 'testID';
import { SimpleDialog } from 'views/SimpleDialog.view';

describe('SimpleDialog.view tests', () => {
  it('Renders SimpleDialog', () => {
    const view = render(
      <SimpleDialog
        open={true}
        handleClose={() => {}}
        title="Simple Dialog"
        description="Description"
      />
    );
    expect(view).not.toBeUndefined();
  });
  it('Shows the right title', () => {
    render(
      <SimpleDialog
        open={true}
        handleClose={() => {}}
        title="Simple Dialog"
        description="Description"
      />
    );
    const dialogTitle = screen.getByTestId(TestID.SimpleDialogTitle);
    expect(dialogTitle).not.toBeUndefined();
    expect(screen.getByText('Simple Dialog')).toBeVisible();
    expect(screen.getByText('Description')).toBeVisible();
  });
});
