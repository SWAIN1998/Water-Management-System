create table app.wells
(
  id uuid default uuid_generate_v4() not null
    constraint wells_pkey
      primary key,
  parent_id uuid,
  former_parent_id uuid,
  status_id integer default 1
    constraint wells_content_node_statuses_id_fk
      references core.content_node_statuses,
  created_at timestamp default CURRENT_TIMESTAMP,
  created_by uuid,
  updated_at timestamp,
  updated_by uuid,
  deleted_at timestamp,
  deleted_by uuid,
  name text,
  gw_elev int,
  ft_amsl int,
  no2_conc real,
  region_id uuid,
  well_type_id uuid,
  last_measured timestamp
);

create unique index if not exists wells_id_cindex
  on app.wells (id);
