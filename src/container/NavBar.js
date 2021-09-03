import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CgArrowDownR } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    // height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className="nav-bar">
      <div className="nav-body">
        <div className="workspace-block">
          <div className="workspace-header">
            <span>
              <h6>
                <b>WorkSpace 1</b>
              </h6>
            </span>
            <span className="workspace-arrow-block">
              <CgArrowDownR />
            </span>
          </div>
          <div className="workspace-child-block">
            <div className="workspace-item">
              <span>
                <AiOutlineSearch />
              </span>
              <span className="workspace-item-label">Search</span>
            </div>
            <div className="workspace-item">
              <span>
                <IoNotificationsOutline />
              </span>
              <span className="workspace-item-label">Notifications</span>
            </div>
            <div className="workspace-item">
              <span>
                <FiSettings />
              </span>
              <span className="workspace-item-label">Settings</span>
            </div>
          </div>
        </div>
        <div className="favorites-block">
          <div className="favorites-header">
            <span>
              <h6>
                <b>Favorites</b>
              </h6>
            </span>
            <span className="favorites-arrow-block">
              <span className="nav-child-counts">1000</span>
            </span>
          </div>
          <div className="favorites-child-block">
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<IoIosArrowDown />}
              defaultExpandIcon={<IoIosArrowForward />}
              multiSelect
            >
              <div className="favorites-item">
                <span>
                  <TreeItem nodeId="1" label="Sales Performance">
                    <TreeItem />
                  </TreeItem>
                </span>
                <span className="favorites-arrow-block">
                  <span
                    style={{ backgroundColor: '#f4f5f7', color: '#53627b' }}
                    className="nav-child-counts"
                  >
                    500
                  </span>
                </span>
              </div>
              <div className="favorites-item">
                <span>
                  <TreeItem nodeId="5" label="Leads SKU-1234">
                    <TreeItem />
                  </TreeItem>
                </span>
                <span className="favorites-arrow-block">
                  <span
                    style={{ backgroundColor: '#f4f5f7', color: '#53627b' }}
                    className="nav-child-counts"
                  >
                    500
                  </span>
                </span>
              </div>
            </TreeView>
          </div>
        </div>
        {/* --------------------------------------- */}
        <div className="leads-block">
          <div className="leads-header">
            <span>
              <h6>
                <b>All Leads</b>
              </h6>
            </span>
            <span className="leads-arrow-block">
              <span
                style={{ backgroundColor: '#12c395' }}
                className="nav-child-counts"
              >
                1000
              </span>
            </span>
          </div>
          <div className="leads-child-block">
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<IoIosArrowDown />}
              defaultExpandIcon={<IoIosArrowForward />}
              multiSelect
            >
              <div className="leads-item">
                <span>
                  <TreeItem nodeId="1" label="By Category">
                    <div className="favorites-item">
                      <span>
                        <TreeItem nodeId="2" label="Wallpapers">
                          <TreeItem />
                        </TreeItem>
                      </span>
                      <span className="favorites-arrow-block">
                        <span
                          style={{
                            backgroundColor: '#f4f5f7',
                            color: '#53627b',
                          }}
                          className="nav-child-counts"
                        >
                          250
                        </span>
                      </span>
                    </div>
                    <div className="favorites-item">
                      <span>
                        <TreeItem nodeId="3" label="Frames">
                          <TreeItem />
                        </TreeItem>
                      </span>
                      <span className="favorites-arrow-block">
                        <span
                          style={{
                            backgroundColor: '#f4f5f7',
                            color: '#53627b',
                          }}
                          className="nav-child-counts"
                        >
                          250
                        </span>
                      </span>
                    </div>
                  </TreeItem>
                </span>
                <span className="leads-arrow-block">
                  <span
                    style={{ backgroundColor: '#f4f5f7', color: '#53627b' }}
                    className="nav-child-counts"
                  >
                    500
                  </span>
                </span>
              </div>
              <div className="leads-item">
                <span>
                  <TreeItem nodeId="5" label="By Region">
                    <TreeItem />
                  </TreeItem>
                </span>
                <span className="leads-arrow-block">
                  <span
                    style={{ backgroundColor: '#f4f5f7', color: '#53627b' }}
                    className="nav-child-counts"
                  >
                    500
                  </span>
                </span>
              </div>
            </TreeView>
          </div>
        </div>
        <div className="tasks-block">
          <div className="tasks-header">
            <span>
              <h6>
                <b>Tasks</b>
              </h6>
            </span>
            <span className="tasks-arrow-block">
              <span
                style={{ backgroundColor: '#fabc05' }}
                className="nav-child-counts"
              >
                80
              </span>
            </span>
          </div>
          <div className="tasks-child-block">
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<IoIosArrowDown />}
              defaultExpandIcon={<IoIosArrowForward />}
              multiSelect
            >
              <div className="tasks-item">
                <span>
                  <TreeItem nodeId="1" label="Returns">
                    <TreeItem />
                  </TreeItem>
                </span>
                <span className="tasks-arrow-block">
                  <span
                    style={{ backgroundColor: '#f4f5f7', color: '#53627b' }}
                    className="nav-child-counts"
                  >
                    20
                  </span>
                </span>
              </div>
              <div className="tasks-item">
                <span>
                  <TreeItem nodeId="2" label="Returns">
                    <TreeItem />
                  </TreeItem>
                </span>
                <span className="tasks-arrow-block">
                  <span
                    style={{ backgroundColor: '#f4f5f7', color: '#53627b' }}
                    className="nav-child-counts"
                  >
                    30
                  </span>
                </span>
              </div>
              <div className="tasks-item">
                <span>
                  <TreeItem nodeId="3" label="Returns for...">
                    <TreeItem />
                  </TreeItem>
                </span>
                <span className="tasks-arrow-block">
                  <span
                    style={{ backgroundColor: '#f4f5f7', color: '#53627b' }}
                    className="nav-child-counts"
                  >
                    30
                  </span>
                </span>
              </div>
            </TreeView>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
