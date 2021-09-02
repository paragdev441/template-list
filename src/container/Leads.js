import React from 'react';
import { CgEye, CgMenuGridO } from 'react-icons/cg';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiPlusSquare } from 'react-icons/fi';
import {
  HiOutlineDotsVertical,
  HiOutlineFilter,
  HiOutlineTable,
} from 'react-icons/hi';
import { BsTable } from 'react-icons/bs';
import { FaLayerGroup, FaSort } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import AddIcon from '../assets/images/AddIcon.png';

const Leads = () => {
  return (
    <div>
      <div className="wallpaers-header">
        <div>
          <div>
            <div style={{ fontWeight: 500 }}>
              All Leads / By Category / Wallpapers
            </div>
          </div>
          <h2>Wallpapers</h2>
        </div>
        <div style={{ marginRight: '10%' }}>
          <button className="save-view-btn">Save View</button>
          <span className="save-view-option-btn">
            <BiDotsHorizontalRounded />
          </span>
        </div>
      </div>
      <div className="kanban-options-block">
        <div style={{ display: 'flex' }}>
          <span
            className={`${'kanban-option-nav-item'}`}
            //   onClick={() => handleOptionClick('kanban')}
          >
            <BsTable />
            Table
          </span>
          <span
            className={`${'kanban-option-nav-item'}`}
            //   onClick={() => handleOptionClick('group')}
          >
            <FaLayerGroup />
            Group
          </span>
          <span
            className={`${'kanban-option-nav-item'}`}
            //   onClick={() => handleOptionClick('filter')}
            data-toggle="modal"
            data-target="#exampleModal"
            data-backdrop="static"
          >
            <HiOutlineFilter />
            Filter
          </span>
          <span
            className={`${'kanban-option-nav-item'}`}
            //   onClick={() => handleOptionClick('sort')}
          >
            <FaSort />
            Sort
          </span>
          <span
            className={`${'kanban-option-nav-item'}`}
            //   onClick={() => handleOptionClick('hide fields')}
          >
            <CgEye />
            Hide Fields
          </span>
        </div>
      </div>
      <div class="leads-table-block table-responsive">
        <table className="table">
          <thead>
            <tr style={{ color: '#444444' }}>
              <th scope="col">
                <div>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <th scope="col">Contact</th>
              <th scope="col">User Status</th>
              <th scope="col">Tags</th>
              <th scope="col">Assigned To</th>
              <th scope="col">SKU</th>
              <th scope="col">Description</th>
              <th scope="col">
                <FiPlusSquare />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: 'grey' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 1</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>5s ago</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#e6e6f2',
                    color: '#5c5cfd',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Active
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fcd66a',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Lead
                      <div />
                    </div>
                  </div>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fddce0',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      DBC
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">9177</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: '#00e676' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 2</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>Yesterday</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#e6e6f2',
                    color: '#5c5cfd',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Active
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#9de3a3',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Paid
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">8453</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: 'grey' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 3</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>14/4/20</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#f2f0f9',
                    color: '#818086',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Inactive
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fddce0',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      DBC
                      <div />
                    </div>
                  </div>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#9de3a3',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Paid
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">3093</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: 'grey' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 1</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>5s ago</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#e6e6f2',
                    color: '#5c5cfd',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Active
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fcd66a',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Lead
                      <div />
                    </div>
                  </div>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fddce0',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      DBC
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">9177</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: '#00e676' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 2</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>Yesterday</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#e6e6f2',
                    color: '#5c5cfd',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Active
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#9de3a3',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Paid
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">8453</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: 'grey' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 3</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>14/4/20</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#f2f0f9',
                    color: '#818086',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Inactive
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fddce0',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      DBC
                      <div />
                    </div>
                  </div>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#9de3a3',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Paid
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">3093</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: 'grey' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 1</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>5s ago</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#e6e6f2',
                    color: '#5c5cfd',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Active
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fcd66a',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Lead
                      <div />
                    </div>
                  </div>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fddce0',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      DBC
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">9177</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: '#00e676' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 2</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>Yesterday</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#e6e6f2',
                    color: '#5c5cfd',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Active
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#9de3a3',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Paid
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">8453</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: 'grey' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 3</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>14/4/20</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#f2f0f9',
                    color: '#818086',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Inactive
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fddce0',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      DBC
                      <div />
                    </div>
                  </div>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#9de3a3',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Paid
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">3093</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: 'grey' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 1</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>5s ago</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#e6e6f2',
                    color: '#5c5cfd',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Active
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fcd66a',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Lead
                      <div />
                    </div>
                  </div>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fddce0',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      DBC
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">9177</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: '#00e676' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 2</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>Yesterday</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#e6e6f2',
                    color: '#5c5cfd',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Active
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#9de3a3',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Paid
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">8453</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
            <tr className="lead-row">
              <th scope="row">
                <div>
                  <span className="drag-icon">
                    <CgMenuGridO />
                  </span>
                  <input
                    class="row-checkbox form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
              </th>
              <td style={{ width: '40%' }}>
                <div className="contact-block">
                  <div>
                    <img
                      src="https://source.unsplash.com/random/30x30?sig=1"
                      alt="avtar"
                    />
                    <div
                      class="status-circle"
                      style={{ backgroundColor: 'grey' }}
                    ></div>
                  </div>
                  <div className="contact-label-block">
                    <b>Contact 3</b>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                      }}
                    >
                      <div>This is a very long contact me...</div>
                      <div>14/4/20</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  className="status-table-block"
                  style={{
                    background: '#f2f0f9',
                    color: '#818086',
                  }}
                >
                  <div>
                    <GoPrimitiveDot />
                  </div>
                  <div>
                    Inactive
                    <div />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#fddce0',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      DBC
                      <div />
                    </div>
                  </div>
                  <div
                    className="tag-table-block"
                    style={{
                      background: '#9de3a3',
                      color: '#8b7f64',
                    }}
                  >
                    <div>
                      Paid
                      <div />
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: 'flex' }}>
                <img
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <img
                  style={{ marginLeft: '-10px' }}
                  src="https://source.unsplash.com/random/30x30?sig=1"
                  alt="avtar"
                />
                <button className="more-assigned-button">
                  <b>+2</b>
                </button>
              </td>
              <td>
                <div className="sku-table-block">3093</div>
              </td>
              <td>
                <b>This is a long description of this co...</b>
              </td>
              <td>
                <HiOutlineDotsVertical />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
