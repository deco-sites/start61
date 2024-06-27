export interface Props {
  /**
   * @format textarea
   * @default Angie MacDowell
   */
  name?: string;

  /**
   * @format textarea 
   * @default angie@macdowell.org
   */
  email?: string;

  /**
   * @format select
   * @default Active
   * @options Active,Inactive
   */
  status?: string;

  /**
   * @format textarea
   * @default /contact/1
   */
  deleteUrl?: string;
}

export default function DeleteRowExample({ 
  name = "Angie MacDowell",
  email = "angie@macdowell.org", 
  status = "Active",
  deleteUrl = "/contact/1",
}: Props) {
  return (
    <table class="table delete-row-example">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody hx-target="closest tr">
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{status}</td>
          <td>
            <button class="btn btn-error" hx-delete={deleteUrl}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}